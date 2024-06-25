from rest_framework import serializers
from zenia_app_root.geometries_management.models import Cone

class ConeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cone
        fields = ['id', 'radius', 'height', 'color', 'material', 'created_at', 'updated_at']
