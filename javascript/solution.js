
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
        var copyAr = ar;
        var pair=0;
        var i=0;
        for(var i=0;i<=n;i++)
        {
            for(var innerLooop=i+1;innerLooop<=n;innerLooop++)
            {
                if(copyAr[i]==copyAr[innerLooop]&&copyAr[i]!=undefined)
                {
                    console.log("copyAr[i] "+copyAr[i]+" index of i "+i+" copyAr[innerloop]"+copyAr[innerLooop]+" index of inner-"+innerLooop)
                   
                    copyAr.splice(innerLooop,1)
                    copyAr.splice(i,1)
                    pair++;
                    i--
                    break;
                }
                 else
                  continue;
            }
        }
        console.log(pair);
        return pair;

}
ar = [4, 5 ,5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6 ,1, 4, 5, 5, 5];

sockMerchant(20, ar);
