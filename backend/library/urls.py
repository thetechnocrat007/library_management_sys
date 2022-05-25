from django.urls import path
from .views import BookListCreateView,BookUpdateDestroyView

urlpatterns = [
    
    #Endpoint to get List of all Books
    
    path('api/books/', BookListCreateView.as_view(), name='listcreatebook'),


    
    #Endpoint to Update & Delete a Book from the record
    
    path('api/books/<pk>', BookUpdateDestroyView.as_view(), name='updatedeletebook'),
    
]