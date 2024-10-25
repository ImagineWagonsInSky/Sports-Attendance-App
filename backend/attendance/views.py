from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Session, Attendance
from .serializers import SessionSerializer, AttendanceSerializer

class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

@api_view(['GET'])
def get_sessions(request):
    try:
        sessions = Session.objects.all()
        serializer = SessionSerializer(sessions, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)  

@api_view(['POST'])
def register_attendance(request):
    try:
        serializer = AttendanceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def get_sessions_with_attendance(request):
    try:
        sessions = Session.objects.all()
        session_data = []

        for session in sessions:
            # Get total number of responses for the session
            total_responses = Attendance.objects.filter(session=session).count()

            # Get number of attendees (those who are attending)
            attendees = Attendance.objects.filter(session=session, is_attending=True).count()

            session_info = SessionSerializer(session).data
            session_info['totalResponses'] = total_responses
            session_info['attendees'] = attendees
            session_data.append(session_info)

        return Response(session_data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)

@api_view(['GET'])
def get_session_by_id(request, session_id):
    try:
        session = Session.objects.get(id=session_id)
        serializer = SessionSerializer(session)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except Session.DoesNotExist:
        return Response({'error': 'Session not found'}, status=status.HTTP_404_NOT_FOUND)