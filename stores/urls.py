from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from stores import views

urlpatterns = format_suffix_patterns([
    url(r'^$', views.api_root),
    url(r'^stores/$',
        views.StoreList.as_view(),
        name='store-list'),
    url(r'^stores/(?P<pk>[0-9]+)/$',
        views.StoreDetail.as_view(),
        name='store-detail'),
    url(r'^items/$',
        views.ItemList.as_view(),
        name='item-list'),
    url(r'^items/(?P<pk>[0-9]+)/$',
        views.ItemDetail.as_view(),
        name='item-detail'),
    url(r'^users/$',
        views.UserList.as_view(),
        name='user-list'),
    url(r'^users/(?P<pk>[0-9]+)/$',
        views.UserDetail.as_view(),
        name='user-detail')
])


urlpatterns += [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
]