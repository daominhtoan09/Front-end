#include <stdio.h>
#include<malloc.h>

int main()
{
    int *p;
    
    int n ;
    do
    {
    printf("nhap vao so phan tu");
    scanf("%d",&n);
    }while(n<0||n>50);
     p=(int *)malloc(n*sizeof(int));
     printf("nhap gia tri cac phan tu");
    for(int i =0;i<n;i++)

    {
       printf("phan tu thu %d",i);
       scanf("%d",&p[i]);
    }
    for(int i =0;i<n;i++)
    {
        printf("\n%d",p[i]);
    }
    //max
    
    int max,min,vitrimax,vitrimin;
    max = p[0];
    min = p[0];
    for(int i =0;i<n;i++)
    {
        if(p[i]>max)
        {
            max=p[i];
            vitrimax=i;
            
        }
        if(p[i]<min)
        {
            min = p[i];
            vitrimin=i;
            
        }
    }
    
    printf("%d\t%d\t%d\t%d",min,max,vitrimin,vitrimax);
    // doi cho
    int tempmin,tempmax;
    tempmin=p[vitrimin];
    for(int i =0;i<n;i++)
    {
        if(p[i]==p[vitrimax])
{
            tempmax=p[i];
            p[i]=tempmin;
}
        for(int i =0;i<n;i++)
        {
            if(p[i]==p[vitrimin])
            {
                p[vitrimin]=tempmax;            }
        }
    }
    for(int i =0;i<n;i++)
    {
        printf("\n%d",p[i]);
    }
    // ghi file
    
    FILE *fp;
    fp = fopen("DS.txt","w+");
    for(int i =0;i<n;i++)
    {
        fprintf(fp,"%d\t",p[i]);
    }
    free(p);
    fclose(fp);
}