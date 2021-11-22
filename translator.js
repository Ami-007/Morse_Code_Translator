// create a function to check every variable

export const morse = (code) => {
    if(code == ".-") {
      return "a"
    }
  
    else if(code == "-...") {
      return "b"
    }
  
    else if(code == "-.-.") {
      return "c"
    }
  
    else if(code == "-..") {
      return "d"
    }
  
    else if(code == ".") {
      return "e"
    }
  
    else if(code == "..-.") {
      return "f"
    }
  
    else if(code == "--.") {
      return "g"
    }
  
    else if(code == "....") {
      return "h"
    }
  
    else if(code == "..") {
      return "i"
    }
  
    else if(code == ".---") {
      return "j"
    }
  
    else if(code == "-.-") {
      return "k"
    }
  
    else if(code == ".-..") {
      return "l"
    }
  
    else if(code == "--") {
      return "m"
    }
  
    else if(code == "-.") {
      return "n"
    }
  
    else if(code == "---") {
      return "o"
    }
  
    else if(code == ".--.") {
      return "p"
    }
  
    else if(code == "--.-") {
      return "q"
    }
  
    else if(code == ".-.") {
      return "r"
    }
  
    else if(code == "...") {
      return "s"
    }
  
    else if(code == "-") {
      return "t"
    }
  
    else if(code == "..-") {
      return "u"
    }
  
    else if(code == "...-") {
      return "v"
    }
  
    else if(code == ".--") {
      return "w"
    }
  
    else if(code == "-..-") {
      return "x"
    }
  
    else if(code == "-.--") {
      return "y"
    }
  
    else if(code == "--..") {
      return "z"
    }
  
    else if(code == "/") {
      return " "
    }
    else {
      return "unavailable"
    }
};

