from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .serializers import BookSerializer
from .models import Book
from rest_framework.response import Response


"""
API View to provide list of all books and Add new book in the Record
"""
class BookListCreateView(generics.ListCreateAPIView): 
    serializer_class = BookSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Book.objects.all()


"""
API View to Delete and Update a book
"""
class BookUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BookSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Book.objects.all()

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        id=instance.id
        r=self.perform_destroy(instance)
        return Response({"id":id})

