var search = function(a, key) {

  let low = 0, high = a.length - 1;

while(low<=high){

    let mid = Math.floor((low + high)/2);

    if(a[mid] == key) return mid;


 if(a[low] <= a[mid]){

    if(key >= a[low] && key < a[mid])

          high = mid - 1;
    else
          low = mid + 1;
   
}

else{
      
  if(key > a[mid] && key <= a[high]) 

      low = mid + 1;
  else 
      high = mid - 1;
  
}

}
return -1;   
};