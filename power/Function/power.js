function carrnbre(n,m){
 if(m === 0)
   return 1;
 else if(m === 1)
   return n;
 else
   return n*carrnbre(n,m -1);
}
carrnbre(0,1);
