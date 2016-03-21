from __future__ import unicode_literals
from django.db import models
# from django.contrib import auth

#Store Model
## Store model will contain many Items
class Store(models.Model):
    name = models.CharField(max_length=100, default='Store')
    description = models.CharField(max_length=1000, default='N/A')


    class Meta:
        ordering = ('name',)

    def __unicode__(self):
       return '%s' % (self.name)
               
class Item(models.Model):
    name = models.CharField(max_length=100, default='Sample Item')
    comments = models.CharField(max_length=1000, default='')
    ## need to change to date field
    expiration = models.CharField(max_length=100, default='')
    amount = models.PositiveIntegerField(default=100)
    store = models.ForeignKey(Store, related_name='items', default='')

    class Meta:
        ordering = ('expiration',)

    def __unicode__(self):
        return '%s: %s' % (self.name, self.expiration)

    def get_store(self):
        return ' '.join([self.store])