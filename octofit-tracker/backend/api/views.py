from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def health_check(request):
    """Health check endpoint to verify backend is running."""
    return Response({
        'status': 'healthy',
        'message': 'OctoFit Tracker Backend is running',
    }, status=status.HTTP_200_OK)
