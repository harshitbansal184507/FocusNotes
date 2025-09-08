from django.contrib.auth import get_user_model
from rest_framework import serializers 
from .models import Note
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = get_user_model()
        fields = ["id", "email", "password", "first_name", "last_name"]
        extra_kwargs = {
            "password": {"write_only": True},
            "email": {"required": True},
        }
    
    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            username=validated_data['email']  # Use email as username fallback
        )
        return user
    
class NoteSerializer(serializers.ModelSerializer):
    class Meta :
        model = Note
        fields = ["id", "title","content", "created_at", "author"]
        extra_kwargs = { "author":{"read_only":True}}
        
        

