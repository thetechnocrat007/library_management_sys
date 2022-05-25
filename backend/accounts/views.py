from .serializers import MyUserSerializer,RegisterSerializer
from rest_framework import generics
from rest_framework.response import Response


#API for Admin Registration
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": MyUserSerializer(user, context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login to get your token",
        })
    