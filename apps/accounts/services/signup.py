from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError

def signup_an_account(serializer):
    Email = serializer.validated_data['email']
    
    if not User.objects.filter(email=Email).exists():
        hashed_password = make_password(serializer.validated_data['password'])
        user = User.objects.create(
        first_name = serializer.validated_data['first_name'],
        last_name = serializer.validated_data['last_name'],
        email = Email,
        username = serializer.validated_data['username'],
        password = hashed_password,
        is_active = True
        )
        return Response({"Message":f"{user.first_name}'s account created successfully!"})
    
    raise ValidationError({"Message":f"User with the email: {Email} does not exists."})