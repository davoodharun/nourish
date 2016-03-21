from rest_framework import serializers
from models import Store, Item
# from django.contrib.auth.models import User

class StoreSerializer(serializers.HyperlinkedModelSerializer):
              
    items = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='item-detail' )

    class Meta:
        model = Store
        fields = ('id', 'name', 'description', 'items')

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    store = serializers.PrimaryKeyRelatedField(many=False, queryset=Store.objects.all())

    class Meta:
        model = Item
        fields = ('id', 'name', 'comments', 'expiration', 'amount', 'store')
