from django.shortcuts import render
from django.contrib.auth.models import User 
from django.contrib.auth import get_user_model
from rest_framework import generics 
from .serializers import UserSerializer , NoteSerializer
from rest_framework.permissions import IsAuthenticated , AllowAny 
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response



from .models import Note


User = get_user_model()


User = get_user_model()

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    username_field = User.EMAIL_FIELD

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user  # this gives back the current user 
        return Note.objects.filter(author=user)
    
    def perform_create(self , serializer): # this helps in creating note in db 
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else :
            print(serializer.errors)    
            
class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user  # this gives back the current user 
        return Note.objects.filter(author=user)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_info(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)
                


    