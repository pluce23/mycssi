number = int(raw_input("#: "))
dword = (raw_input("word: "))

def pluralize(word):
    if word[-3:] == "ife":
        return word[:-3] + "ives"
    elif word[-2:] == "sh" or word[-2:] == "ch":
        return word + "es"
    elif word[-2:] == "us":
        return word[:-2] + "i"
    else:
        return word + "s"



print(pluralize(dword))
