from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True) # "auto_now_add" automatically set the field to the current date and time when the model instance is first created
    author  = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes") # child objects deleted when parent here author is deleted 
    
    def __str__(self):
        return self.title
    
    
    # now a serializer is created for this , since this is an api that will communicate with react app 