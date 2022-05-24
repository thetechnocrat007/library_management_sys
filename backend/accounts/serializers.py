from rest_framework import serializers
from django.contrib.auth import get_user_model


# class MyUserListSerializer(serializers.ModelSerializer): 

#     class Meta:
#         model = get_user_model()
#         fields = ('id','email','first_name', 'last_name')




class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id' ,'email','first_name', 'last_name')



class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id','email','password','first_name', 'last_name')
        extra_kwargs = {
            'password':{'write_only': True},
        }
    def create(self, validated_data):
        user = get_user_model().objects.create_user(validated_data['email'],     password = validated_data['password']  ,first_name=validated_data['first_name'],  last_name=validated_data['last_name'])
        return user