function calculaNota(ex, p1, p2) {
  
  calculaNota = (ex + p1*2 + p2*3) / 6
  
  if(calculaNota >= 9){
    return "A"
  }else if (calculaNota < 9 && calculaNota >= 7.5){
    return "B"
  }else if (calculaNota < 7.5 && calculaNota >= 6){
    return "C"
  }else{
    return "D"
  }
}