'''pet = {
    "name: Doggo",
    "animal": "dog",
    "species": "labrador",
    "age": 5
}
'''

class Pet(object):
    def __init__(self, name, age, animal):
        self.name = name
        self.age = age
        self.animal = animal
        self.is_hungry = False
        self.mood = "happy"
        self.location = "room 1"

    def eat(self):
        print("> %s is eating..." % self.name)
        if self.is_hungry: # This is equivalent to the 'self.is_hungry'
            self.is_hungry = False
        else:
            print("> %s may have eaten too much." % self.name)
            self.mood = "lethargic"

    def move(self):
        print("> %s is moving..." % self.name)
        if self.location == "room 1":
            self.location = "room 2"
        else:
            print("> %s is in %s" % (self.name, self.location))


my_pet = Pet("Fido", 3, "dog")

my_pet.is_hungry = True # manually set to True
print("Is my pet hungry? %s" % my_pet.is_hungry)
my_pet.eat() # calls the eat method defined above
print("How about now %s" % my_pet.is_hungry)
print("My pet is feeling %s" % my_pet.mood)
my_pet.move()


'''
#Initialize a new instance of pet, with a name of "Fido" and a n age of
my_pet = Pet("Fido", 3)
pet_2 = Pet("Trappy", 4)
pet_3 = Pet("Louie", 1)


#This should print 'My pet Fido is 3 years old'
print("My pet %s is %s years old" % (my_pet.name, my_pet.age))

print("My pet %s is %s years old" % (pet_2.name, pet_2.age))

print("My pet %s is %s years old" % (pet_3.name, pet_3.age))
'''
