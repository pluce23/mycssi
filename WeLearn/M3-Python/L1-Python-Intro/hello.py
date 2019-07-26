

'''num1 = int(raw_input("Enter number # 1: "))
num2 = int(raw_input("Enter number #2 "))
total = num1 + num2

print("the sum is " + str(total))


num = int(raw_input('Enter a number:'))
if num > 0:
    print("That's a postive number!")
elif num < 0: # Note that we use the one-word elision
    print("That's a negative number!")
if num > 50:
   print("That's a large number!")
else:
    print("Zero is neither positive nor negative")'''



'''string = "hello there"
for letter in string:
    print(letter.upper())

for i in range(5):
    print(i)

x = 1
while x <= 5:
    print(x)
    x = x + 1'''



'''my_name = "Bob"
friend1 = "Alice"
friend2 = "John"
friend3 = "Mallory"

print(
 "My name is %s and my friends are %s, %s, and %s"%
 (my_name, friend1, friend2, friend3)
)'''



'''def greetAgent():
    print("Bond. James Bond.")

greetAgent()'''






'''def greetAgent(first_name, last_name):
    print("%s. %s %s." % (last_name, first_name, last_name))

greetAgent('Philip', 'Luce')'''




'''def createAgentGreeting(first_name, last_name):
    return "%s. %s %s." % (last_name, first_name, last_name)

print createAgentGreeting('Philip', 'Luce')'''
