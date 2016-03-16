from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from stores.models import Store, Item
from stores.serializers import StoreSerializer, ItemSerializer

# Create your views here.

class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

@csrf_exempt
def store_list(request):
    """
    List all code stores, or create a new store.
    """
    if request.method == 'GET':
        stores = Store.objects.all()
        serializer = StoreSerializer(stores, many=True)
        return JSONResponse(serializer.data)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = StoreSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)

@csrf_exempt
def store_detail(request, pk):
    """
    Retrieve, update or delete a code Store.
    """
    try:
        store = Store.objects.get(pk=pk)
    except Store.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = StoreSerializer(store)
        return JSONResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = StoreSerializer(store, data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data)
        return JSONResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        store.delete()
        return HttpResponse(status=204)

@csrf_exempt       
def item_list(request):
    """
    List all code items, or create a new item.
    """
    if request.method == 'GET':
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return JSONResponse(serializer.data)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)

@csrf_exempt
def item_detail(request, pk):
    """
    Retrieve, update or delete a code Item.
    """
    try:
        item = Item.objects.get(pk=pk)
    except Item.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = ItemSerializer(item)
        return JSONResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = StoreSerializer(item, data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data)
        return JSONResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        item.delete()
        return HttpResponse(status=204)
