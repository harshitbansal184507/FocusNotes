from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings



class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True) # "auto_now_add" automatically set the field to the current date and time when the model instance is first created
    author  = models.ForeignKey("CustomUser", on_delete=models.CASCADE, related_name="notes") # child objects deleted when parent here author is deleted 
    
    def __str__(self):
        return self.title
    
    
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True, blank=True, null=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    def __str__(self):
        return self.email