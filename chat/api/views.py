from rest_framework.decorators import api_view
from rest_framework.response import Response
from accounts.models import AppUser
from chat.api.serializers import ConversationSerializer
from chat.models import Message, Conversation
from pvtmessager.utils import api_status_response


@api_view(['POST', 'GET'])
def test_api_django_rest(request, version):
    return Response(
        {"status": True, "message": "your request has been successfully tested."}
    )


@api_view(['GET'])
def api_get_all_conversations(request, version):
    me = request.user
    conversations = Conversation.objects.filter(subscriber__id__in=[me.id], is_deleted=False, is_archived=False)
    return Response({"status": True, "conversations": ConversationSerializer(
        conversations, many=True, remove_fields=['subscriber', 'is_deleted', 'is_archived', 'created_date']).data})


@api_view(['POST'])
def api_send_message(request, version):
    """

    :param request: receiver_id, text
    :param version: v1,v2
    :return: success status and message

    search first existing conversation
    create new conversation if not found

    """
    receiver_id = request.data.get('receiver_id', None)
    if receiver_id is None:
        return api_status_response(False, 'receiver id is required')

    try:
        receiver = AppUser.objects.get(id=receiver_id)
    except :
        return api_status_response(False, 'sender does not exist.')

    text = request.data.get('text', None)
    if text is None:
        return api_status_response(False, 'message text is required')

    me = request.user
    if me.id == receiver_id:
        return api_status_response(False, "It is just you. can't send message to yourself")
    our_conversation = Conversation.objects \
        .filter(subscriber__id__in=[me.id]) \
        .filter(subscriber__id__in=[receiver_id])

    if our_conversation.count() >= 1:
        conversation = our_conversation[0]
        # creating message instance
        Message.objects.create(sender=me, conversation=conversation, text=text)
        conversation.save()
        return api_status_response(True, 'message successfully sent')
    else:
        # creating conversation instance and subscribes both user
        conversation = Conversation.objects.create(creator_id=me.id)
        conversation.subscriber.add(me, receiver)
        return api_status_response(True, 'message successfully sent')
