short number;
short pinState[4];

void setup() {
  // set up pins
  pinMode(2, OUTPUT);  
  pinMode(3, OUTPUT);  
  pinMode(4, OUTPUT);  
  pinMode(5, OUTPUT);

  // set starting number
  number = 0;

  // start Serial
  Serial.begin(9600);
}

void setNumber(short number){
  // clear array
  for(short i=0; i<4; i++)
    pinState[i] = 0;
  number %= 16;
  short iter = 0;
  while(number){
    if(number%2)
      pinState[iter] = HIGH;
    else
      pinState[iter] = LOW;
    iter++;
    number /= 2;
  }
  // set diodes according to calculated data
  for(short i=0; i<4; i++)
    digitalWrite(i+2, pinState[i]);
}

void loop() {
  if(Serial.available() > 0){
      int number = Serial.parseInt();
      Serial.print("Recieved: ");
      Serial.println(number);
      setNumber(number);
  }
}
