

//==========================================
//      Lists
//==========================================
var List={};
List.helper={};

List.turnIntoCSList=function(l){
    return {'ctype':'list','value':l};
}


List.realVector=function(l){
    var erg=[];
    for(var i=0;i<l.length;i++){
        erg[erg.length]={"ctype":"number" ,"value":{'real':l[i],'imag':0}};
    }
    return {'ctype':'list','value':erg};
}

List.realMatrix=function(l){
    var erg=[];
    for(var i=0;i<l.length;i++){
            erg[erg.length]=List.realVector(l[i]);
    }
    return List.turnIntoCSList(erg);
}

List.ex=List.realVector([1,0,0]);
List.ey=List.realVector([0,1,0]);
List.ez=List.realVector([0,0,1]);




List.linfty=List.realVector([0,0,1]);

List.ii=List.turnIntoCSList([CSNumber.complex(1,0),
                             CSNumber.complex(0,1),
                             CSNumber.complex(0,0)]);

List.jj=List.turnIntoCSList([CSNumber.complex(1,0),
                             CSNumber.complex(0,-1),
                             CSNumber.complex(0,0)]);


List.fundDual=List.realMatrix([[1,0,0],[0,1,0],[0,0,0]]);
List.fund=List.realMatrix([[0,0,0],[0,0,0],[0,0,1]]);


List.sequence=function(a,b){
    var erg=[];
    for(var i=Math.round(a.value.real);i<Math.round(b.value.real)+1;i++){
        erg[erg.length]={"ctype":"number" ,"value":{'real':i,'imag':0}};
    }
    return {'ctype':'list','value':erg};
}

List.pairs=function(a){
    var erg=[];
    for(var i=0;i<a.value.length-1;i++){
        for(var j=i+1;j<a.value.length;j++){
            erg[erg.length]={'ctype':'list','value':[a.value[i],a.value[j]]};
        }
    }
    return {'ctype':'list','value':erg};
}

List.triples=function(a){
    var erg=[];
    for(var i=0;i<a.value.length-2;i++){
        for(var j=i+1;j<a.value.length-1;j++){
            for(var k=j+1;k<a.value.length;k++){
                erg[erg.length]={'ctype':'list','value':[a.value[i],a.value[j],a.value[k]]};
            }
        }
    }
    return {'ctype':'list','value':erg};
}

List.triples=function(a){
    var erg=[];
    for(var i=0;i<a.value.length-2;i++){
        for(var j=i+1;j<a.value.length-1;j++){
            for(var k=j+1;k<a.value.length;k++){
                erg[erg.length]={'ctype':'list','value':[a.value[i],a.value[j],a.value[k]]};
            }
        }
    }
    return {'ctype':'list','value':erg};
}


List.cycle=function(a){
    var erg=[];
    for(var i=0;i<a.value.length-1;i++){
        erg[erg.length]={'ctype':'list','value':[a.value[i],a.value[i+1]]};
    }
    erg[erg.length]={'ctype':'list','value':[a.value[a.value.length-1],a.value[0]]};

    return {'ctype':'list','value':erg};
}

List.consecutive=function(a){
    var erg=[];
    for(var i=0;i<a.value.length-1;i++){
        erg[erg.length]={'ctype':'list','value':[a.value[i],a.value[i+1]]};
    }

    return {'ctype':'list','value':erg};
}

List.reverse=function(a){
    var erg=[];
    for(var i=a.value.length-1;i>=0;i--){
        erg[erg.length]=a.value[i];
    }

    return {'ctype':'list','value':erg};
}



List.directproduct=function(a,b){
    var erg=[];
    for(var i=0;i<a.value.length;i++){
        for(var j=0;j<b.value.length;j++){
            erg[erg.length]={'ctype':'list','value':[a.value[i],b.value[j]]};
        }
    }
    return {'ctype':'list','value':erg};
}


List.concat=function(a,b){
    var erg=[];
    for(var i=0;i<a.value.length;i++){
        erg[erg.length]=a.value[i];
    }
    for(var j=0;j<b.value.length;j++){
        erg[erg.length]=b.value[j];
    }
    return {'ctype':'list','value':erg};
}


List.prepend=function(b,a){
    var erg=[];
    erg[erg.length]=b;

    for(var i=0;i<a.value.length;i++){
        erg[erg.length]=a.value[i];
    }
    return {'ctype':'list','value':erg};
}

List.append=function(a,b){
    var erg=[];
    for(var i=0;i<a.value.length;i++){
        erg[erg.length]=a.value[i];
    }
    erg[erg.length]=b;
    return {'ctype':'list','value':erg};
}


List.contains=function(a,b){
    var erg=[];
    var bb=false; 
    for(var i=0;i<a.value.length;i++){
        var cc=a.value[i];
        if((evaluator.helper.equals(cc,b)).value){
            return {'ctype':'boolean','value':true};

        };
    }
    return {'ctype':'boolean','value':false};
}


List.common=function(a,b){
    var erg=[];
    for(var i=0;i<a.value.length;i++){
        var bb=false; 
        var cc=a.value[i];
        for(var j=0;j<b.value.length;j++){
            bb=bb||(evaluator.helper.equals(cc,b.value[j])).value;
        }
        if(bb){
            erg[erg.length]=a.value[i];
        }
    }
    return {'ctype':'list','value':erg};
}

List.remove=function(a,b){
    var erg=[];
    for(var i=0;i<a.value.length;i++){
        var bb=false; 
        var cc=a.value[i];
        for(var j=0;j<b.value.length;j++){
            bb=bb||(evaluator.helper.equals(cc,b.value[j])).value;
        }
        if(!bb){
            erg[erg.length]=a.value[i];
        }
    }
    return {'ctype':'list','value':erg};
}

List.helper.compare=function(a,b){
    if(a.ctype=='number' && b.ctype=='number'){
        return a.value.real-b.value.real
    }
    return -1;

}

List.sort1=function(a){
  var erg=a.value.sort(General.compare);
  return List.turnIntoCSList(erg);
}

List.helper.isEqual=function(a1,a2){
    return List.equals(a1,a2).value;
}

List.helper.isLessThan=function(a,b){

    var s1 = a.value.length;
    var s2 = b.value.length;
    var i = 0;
    
    while (!(    i >= s1 
                 || i >= s2 
                 || !General.isEqual(a.value[i], b.value[i])
                 )) {i++;}
    if (i == s1 && i < s2) {return true};
    if (i == s2 && i < s1) {return false};
    if (i == s1 && i == s2) {return false};
    return General.isLessThan(a.value[i], b.value[i]);
    
}


List.helper.compare=function(a,b) {
    if(List.helper.isLessThan(a,b)){return -1}
    if(List.helper.isEqual(a,b)){return 0}
    return 1;
}

List.equals=function(a1,a2){
    if(a1.value.length != a2.value.length){
        return {'ctype':'boolean','value':false};
    }
    var erg=true;
    for(var i=0;i<a1.value.length;i++){
        var av1=a1.value[i];
        var av2=a2.value[i];
        
        if(av1.ctype=='list' && av2.ctype=='list' ){
            erg=erg && List.equals(av1,av2).value;
        } else {
            erg=erg && evaluator.comp_equals([av1,av2],[]).value;
            
        }
    }
    return {'ctype':'boolean','value':erg};
}

List.almostequals=function(a1,a2){
    
    if(a1.value.length != a2.value.length){
        return {'ctype':'boolean','value':false};
    }
    var erg=true;
    for(var i=0;i<a1.value.length;i++){
        var av1=a1.value[i];
        var av2=a2.value[i];
        
        if(av1.ctype=='list' && av2.ctype=='list' ){
            erg=erg && List.comp_almostequals(av1,av2).value;
        } else {
            erg=erg && evaluator.comp_almostequals([av1,av2],[]).value;
            
        }
    }
    return {'ctype':'boolean','value':erg};
}

List.helper.isAlmostReal=function(a1){
    var erg=true;
    for(var i=0;i<a1.value.length;i++){
        var av1=a1.value[i];

        if(av1.ctype=='list' ){
            erg=erg && List.helper.isAlmostReal(av1);
        } else {
            erg=erg && CSNumber.helper.isAlmostReal(av1);            
        }
    }
    return erg;
}

List.helper.isNaN=function(a1){
    var erg=false;
    for(var i=0;i<a1.value.length;i++){
        var av1=a1.value[i];

        if(av1.ctype=='list' ){
            erg=erg || List.helper.isNaN(av1);
        } else {
            erg=erg || CSNumber.helper.isNaN(av1);            
        }
    }
    return erg;
}



List.set=function(a1){
    var erg=[];
    var erg1=a1.value.sort(General.compare);

    for(var i=0;i<erg1.length;i++){
        if(i==0||!(evaluator.comp_equals([erg[erg.length-1],erg1[i]],[])).value){
            erg[erg.length]=erg1[i];

        }

    }
    
    return {'ctype':'list','value':erg};

}





List.genericListMath=function(a,op){

  if(a.value.length==0){
        return nada
    };
  var erg=a.value[0];
  for(var i=1;i<a.value.length;i++){
     erg=General[op](erg,a.value[i]); 
  }
  return erg;
}




///////////////////////////


List.maxval=function(a){//Only for Lists or Lists of Lists that contain numbers
                        //Used for Normalize max
    var erg=CSNumber.real(0);
    for(var i=0;i<a.value.length;i++){
        var v=a.value[i];
        if(v.ctype=="number"){
            erg=CSNumber.argmax(erg,v);
        }
        if(v.ctype=="list"){
            erg=CSNumber.argmax(erg,List.maxval(v));
        }
    }
    return CSNumber.clone(erg);
}

List.normalizeMax=function(a) {
    var s=CSNumber.inv(List.maxval(a));
    return List.scalmult(s,a);
}

List.max=function(a1,a2){
    
    if(a1.value.length != a2.value.length){
        return nada;
    }
    var erg=[];
    for(var i=0;i<a1.value.length;i++){
        var av1=a1.value[i];
        var av2=a2.value[i];
        erg[erg.length]=General.max(av1,av2);
    }
    return {'ctype':'list','value':erg};
}





List.min=function(a1,a2){
    
    if(a1.value.length != a2.value.length){
        return nada;
    }
    var erg=[];
    for(var i=0;i<a1.value.length;i++){
        var av1=a1.value[i];
        var av2=a2.value[i];
        erg[erg.length]=General.min(av1,av2);
    }
    return {'ctype':'list','value':erg};
}






List.scaldiv=function(a1,a2){
    if(a1.ctype != 'number'){
        return nada;
    }
    var erg=[];
    for(var i=0;i<a2.value.length;i++){
        var av2=a2.value[i];
        if(av2.ctype=='number' ){
            erg[erg.length]=General.div(av2,a1);
        } else if(av2.ctype=='list'  ){
            erg[erg.length]=List.scaldiv(a1,av2);
        } else {
            erg[erg.length]=nada;
        }
    }
    return {'ctype':'list','value':erg};
}


List.scalmult=function(a1,a2){
    if(a1.ctype != 'number'){
        return nada;
    }
    var erg=[];
    for(var i=0;i<a2.value.length;i++){
        var av2=a2.value[i];
        if(av2.ctype=='number' ){
            erg[erg.length]=General.mult(av2,a1);
        } else if(av2.ctype=='list'  ){
            erg[erg.length]=List.scalmult(a1,av2);
        } else {
            erg[erg.length]=nada;
        }
    }
    return {'ctype':'list','value':erg};
}


List.add=function(a1,a2){
    
    if(a1.value.length != a2.value.length){
        return nada;
    }
    var erg=[];
    for(var i=0;i<a1.value.length;i++){
        var av1=a1.value[i];
        var av2=a2.value[i];
        if(av1.ctype=='number' && av2.ctype=='number' ){
            erg[erg.length]=General.add(av1,av2);
        } else if(av1.ctype=='list' && av2.ctype=='list' ){
            erg[erg.length]=List.add(av1,av2);
        } else {
            erg[erg.length]=nada;
        }
    }
    return {'ctype':'list','value':erg};
}


List.sub=function(a1,a2){
    
    if(a1.value.length != a2.value.length){
        return nada;
    }
    var erg=[];
    for(var i=0;i<a1.value.length;i++){
        var av1=a1.value[i];
        var av2=a2.value[i];
        if(av1.ctype=='number' && av2.ctype=='number' ){
            erg[erg.length]=CSNumber.sub(av1,av2);
        } else if(av1.ctype=='list' && av2.ctype=='list' ){
            erg[erg.length]=List.sub(av1,av2);
        } else {
            erg[erg.length]=nada;
        }
    }
    return {'ctype':'list','value':erg};
}



List.abs2=function(a1){
    
    var erg=0;
    for(var i=0;i<a1.value.length;i++){
        var av1=a1.value[i];
        if(av1.ctype=='number' ){
            erg+=CSNumber.abs2(av1).value.real;
        } else if(av1.ctype=='list' ){
            erg+=List.abs2(av1).value.real;
        } else {
            return nada;
        }
    }

    return {"ctype":"number" ,
        "value":{'real':erg, 'imag':0}};
}

List.abs=function(a1){
   return CSNumber.sqrt(List.abs2(a1))
}


List.normalizeMaxXX=function(a){//Assumes that list is a number Vector
    var maxv=-10000;
    var nn=CSNumber.real(1);
    for(var i=0;i<a.value.length;i++){
       var v=CSNumber.abs(a.value[i]);
       if(v.value.real>maxv){
           nn=a.value[i];
           maxv=v.value.real; 
       }
    }
    return List.scaldiv(nn,a);

}



List.recursive=function(a1,op){
    var erg=[];
    for(var i=0;i<a1.value.length;i++){
        var av1=evaluateAndVal(a1.value[i]);//Will man hier evaluieren
        if(av1.ctype=='number'){
            erg[erg.length]=CSNumber[op](av1);
        } else if(av1.ctype=='list'){
            erg[erg.length]=List[op](av1);
        } else {
            erg[erg.length]=nada;
        }
    }
    return {'ctype':'list','value':erg};

}

List.re=function(a){
    return List.recursive(a,"re");
}


List.neg=function(a){
    return List.recursive(a,"neg");
}

List.im=function(a){
    return List.recursive(a,"im");
}

List.conjugate=function(a){
    return List.recursive(a,"conjugate");
}


List.round=function(a){
    return List.recursive(a,"round");
}


List.ceil=function(a){
    return List.recursive(a,"ceil");
}


List.floor=function(a){
    return List.recursive(a,"floor");
}



List.helper.colNumb=function(a){
    if(a.ctype!='list') {
        return -1;
    }
    var ind=-1;
    for(var i=0;i<a.value.length;i++){
        if((a.value[i]).ctype!='list') {
            return -1;
        }
        if(i==0){
            ind=(a.value[i]).value.length;
        } else {
            if(ind!=(a.value[i]).value.length)
                return -1
        }
    }
    return ind;

}

List.helper.isNumberVecN=function(a,n){
    
    if(a.ctype!='list') {
        return false;
    }
    if(a.value.length!=n) {
        return false;
    }

    for(var i=0;i<a.value.length;i++){
        if((a.value[i]).ctype!='number') {
            return false;
        }
    }
    return true;
        
}



List.isNumberVector=function(a){
    if(a.ctype!='list') {
        return {'ctype':'boolean','value':false};
    }
    for(var i=0;i<a.value.length;i++){
        if((a.value[i]).ctype!='number') {
            return {'ctype':'boolean','value':false};
        }
    }
    return {'ctype':'boolean','value':true};
    
}


List.isNumberVectorN=function(a,n){
    if(a.ctype!='list') {
        return {'ctype':'boolean','value':false};
    }
    if(a.value)
    for(var i=0;i<a.value.length;i++){
        if((a.value[i]).ctype!='number') {
            return {'ctype':'boolean','value':false};
        }
    }
    return {'ctype':'boolean','value':true};
    
}






List.isNumberMatrix=function(a){
    if(List.helper.colNumb(a)==-1){
        return {'ctype':'boolean','value':false};
    }

    for(var i=0;i<a.value.length;i++){
        if(!List.isNumberVector((a.value[i])).value) {
            return {'ctype':'boolean','value':false};
        }
    }
    return {'ctype':'boolean','value':true};
    
}



List.scalproduct=function(a1,a2){
    if(a1.value.length != a2.value.length){
        return nada;
    }
    var erg={'ctype':'number','value':{'real':0,'imag':0}};
    for(var i=0;i<a2.value.length;i++){
        var av1=a1.value[i];
        var av2=a2.value[i];
        if(av1.ctype=='number' && av2.ctype=='number'){
            erg=CSNumber.add(CSNumber.mult(av1,av2),erg);
        } else {
            return nada;
        }
    }
    
    return erg;
}

List.productMV=function(a,b){
    if(a.value[0].value.length != b.value.length){
        return nada;
    }
    var li=[];
    for(var j=0;j<a.value.length;j++){
        var erg={'ctype':'number','value':{'real':0,'imag':0}};
        var a1=a.value[j];
        for(var i=0;i<b.value.length;i++){
            var av1=a1.value[i];
            var av2=b.value[i];

            if(av1.ctype=='number' && av2.ctype=='number'){
                erg=CSNumber.add(CSNumber.mult(av1,av2),erg);
            } else {
                return nada;
            }
        }
        li[li.length]=erg;
    }    
    return List.turnIntoCSList(li);

}


List.productVM=function(a,b){
    if(a.value.length != b.value.length){
        return nada;
    }
    var li=[];
    for(var j=0;j<b.value[0].value.length;j++){
        var erg={'ctype':'number','value':{'real':0,'imag':0}};
        for(var i=0;i<a.value.length;i++){
            var av1=a.value[i];
            var av2=b.value[i].value[j];

            if(av1.ctype=='number' && av2.ctype=='number'){
                erg=CSNumber.add(CSNumber.mult(av1,av2),erg);
            } else {
                return nada;
            }
        }
        li[li.length]=erg;
    }    
    return List.turnIntoCSList(li);

}

List.productMM=function(a,b){
    if(a.value[0].value.length != b.value.length){
        return nada;
    }
    var li=[];
    for(var j=0;j<a.value.length;j++){
        var aa=a.value[j];
        var erg=List.productVM(aa,b);
        li[li.length]=erg;
    }    
    return List.turnIntoCSList(li);
}





List.mult=function(a,b){

   if(a.value.length==b.value.length && List.isNumberVector(a).value && List.isNumberVector(b).value){
      return List.scalproduct(a,b);
   } 

    if(List.isNumberMatrix(a).value && b.value.length==a.value[0].value.length && List.isNumberVector(b).value){
      return List.productMV(a,b);
   } 

    if(List.isNumberMatrix(b).value && a.value.length==b.value.length && List.isNumberVector(a).value){
      return List.productVM(a,b);
   } 

    if(List.isNumberMatrix(a).value && List.isNumberMatrix(b) && b.value.length==a.value[0].value.length){
      return List.productMM(a,b);
   } 

   return nada;


}

List.projectiveDistMinScal=function(a,b){
    var sa=List.abs(a);
    var sb=List.abs(b);

    if(sa.value.real==0||sb.value.real==0)
        return 0;
    var cb=List.conjugate(b);
    var p=List.scalproduct(a,cb);

    var np=CSNumber.div(p,CSNumber.abs(p));
    var na=List.scaldiv(sa,a); 
    var nb=List.scaldiv(sb,b);
    na=List.scalmult(np,na);

    var d1=List.abs(List.add(na,nb));
    var d2=List.abs(List.sub(na,nb));
    return Math.min(d1.value.real,d2.value.real);

}

List.crossOperator=function(a){
    
    var x=CSNumber.clone(a.value[0]);
    var y=CSNumber.clone(a.value[1]);
    var z=CSNumber.clone(a.value[2]);
    return List.turnIntoCSList([
        List.turnIntoCSList([CSNumber.real(0),CSNumber.neg(z),y]),
        List.turnIntoCSList([z,CSNumber.real(0),CSNumber.neg(x)]),
        List.turnIntoCSList([CSNumber.neg(y),x,CSNumber.real(0)])
        ]
                               );
        
}

List.cross=function(a,b){//Assumes that a is 3-Vector
    var x=CSNumber.sub(CSNumber.mult(a.value[1],b.value[2]),CSNumber.mult(a.value[2],b.value[1]));
    var y=CSNumber.sub(CSNumber.mult(a.value[2],b.value[0]),CSNumber.mult(a.value[0],b.value[2]));
    var z=CSNumber.sub(CSNumber.mult(a.value[0],b.value[1]),CSNumber.mult(a.value[1],b.value[0]));
    return List.turnIntoCSList([x,y,z]);
}

List.veronese=function(a){//Assumes that a is 3-Vector
    var xx=CSNumber.mult(a.value[0],a.value[0]);
    var yy=CSNumber.mult(a.value[1],a.value[1]);
    var zz=CSNumber.mult(a.value[2],a.value[2]);
    var xy=CSNumber.mult(a.value[0],a.value[1]);
    var xz=CSNumber.mult(a.value[0],a.value[2]);
    var yz=CSNumber.mult(a.value[1],a.value[2]);
    return List.turnIntoSCList([xx,yy,zz,xy,xz,yz]);
}

List.matrixFromVeronese=function(a){//Assumes that a is 6-Vector
    //Wie Wichtig ist hier das Clonen???
    var xx=CSNumber.clone(a.value[0]);
    var yy=CSNumber.clone(a.value[1]);
    var zz=CSNumber.clone(a.value[2]);
    var xy=CSNumber.div(a.value[3],CSNumber.real(2));
    var xz=CSNumber.div(a.value[4],CSNumber.real(2));
    var yz=CSNumber.div(a.value[5],CSNumber.real(2));
    var yx=CSNumber.clone(xy);
    var zx=CSNumber.clone(xz);
    var zy=CSNumber.clone(yz);
    return List.turnIntoCSList([
        List.turnIntoCSList([xx,xy,xz]),
        List.turnIntoCSList([yx,yy,yz]),
        List.turnIntoCSList([zx,zy,zz])
        ])

}



List.det3=function(p,q,r){//Assumes that a,b,c are 3-Vectors
                          //Keine Ahnung ob man das so inlinen will (hab das grad mal so übernommen)

        var re=   p.value[0].value.real * q.value[1].value.real * r.value[2].value.real 
                - p.value[0].value.imag * q.value[1].value.imag * r.value[2].value.real 
                - p.value[0].value.imag * q.value[1].value.real * r.value[2].value.imag 
                - p.value[0].value.real * q.value[1].value.imag * r.value[2].value.imag 
                + p.value[2].value.real * q.value[0].value.real * r.value[1].value.real 
                - p.value[2].value.imag * q.value[0].value.imag * r.value[1].value.real 
                - p.value[2].value.imag * q.value[0].value.real * r.value[1].value.imag 
                - p.value[2].value.real * q.value[0].value.imag * r.value[1].value.imag 
                + p.value[1].value.real * q.value[2].value.real * r.value[0].value.real 
                - p.value[1].value.imag * q.value[2].value.imag * r.value[0].value.real 
                - p.value[1].value.imag * q.value[2].value.real * r.value[0].value.imag 
                - p.value[1].value.real * q.value[2].value.imag * r.value[0].value.imag
                - p.value[0].value.real * q.value[2].value.real * r.value[1].value.real 
                + p.value[0].value.imag * q.value[2].value.imag * r.value[1].value.real 
                + p.value[0].value.imag * q.value[2].value.real * r.value[1].value.imag 
                + p.value[0].value.real * q.value[2].value.imag * r.value[1].value.imag 
                - p.value[2].value.real * q.value[1].value.real * r.value[0].value.real 
                + p.value[2].value.imag * q.value[1].value.imag * r.value[0].value.real 
                + p.value[2].value.imag * q.value[1].value.real * r.value[0].value.imag 
                + p.value[2].value.real * q.value[1].value.imag * r.value[0].value.imag 
                - p.value[1].value.real * q.value[0].value.real * r.value[2].value.real 
                + p.value[1].value.imag * q.value[0].value.imag * r.value[2].value.real 
                + p.value[1].value.imag * q.value[0].value.real * r.value[2].value.imag 
                + p.value[1].value.real * q.value[0].value.imag * r.value[2].value.imag;

        var im= - p.value[0].value.imag * q.value[1].value.imag * r.value[2].value.imag 
                + p.value[0].value.imag * q.value[1].value.real * r.value[2].value.real 
                + p.value[0].value.real * q.value[1].value.real * r.value[2].value.imag 
                + p.value[0].value.real * q.value[1].value.imag * r.value[2].value.real 
                - p.value[2].value.imag * q.value[0].value.imag * r.value[1].value.imag 
                + p.value[2].value.imag * q.value[0].value.real * r.value[1].value.real 
                + p.value[2].value.real * q.value[0].value.real * r.value[1].value.imag 
                + p.value[2].value.real * q.value[0].value.imag * r.value[1].value.real 
                - p.value[1].value.imag * q.value[2].value.imag * r.value[0].value.imag 
                + p.value[1].value.imag * q.value[2].value.real * r.value[0].value.real 
                + p.value[1].value.real * q.value[2].value.real * r.value[0].value.imag 
                + p.value[1].value.real * q.value[2].value.imag * r.value[0].value.real
                + p.value[0].value.imag * q.value[2].value.imag * r.value[1].value.imag
                - p.value[0].value.imag * q.value[2].value.real * r.value[1].value.real 
                - p.value[0].value.real * q.value[2].value.real * r.value[1].value.imag
                - p.value[0].value.real * q.value[2].value.imag * r.value[1].value.real
                + p.value[2].value.imag * q.value[1].value.imag * r.value[0].value.imag
                - p.value[2].value.imag * q.value[1].value.real * r.value[0].value.real 
                - p.value[2].value.real * q.value[1].value.real * r.value[0].value.imag 
                - p.value[2].value.real * q.value[1].value.imag * r.value[0].value.real 
                + p.value[1].value.imag * q.value[0].value.imag * r.value[2].value.imag 
                - p.value[1].value.imag * q.value[0].value.real * r.value[2].value.real 
                - p.value[1].value.real * q.value[0].value.real * r.value[2].value.imag 
                - p.value[1].value.real * q.value[0].value.imag * r.value[2].value.real;


    return CSNumber.complex(re,im);
}


List.clone=function(a){
    var erg=[];
    for(var i=0;i<a.value.length;i++){
        erg[erg.length]=evaluator.helper.clone(a.value[i]);
    }
    return {"ctype":"list" ,  "value":erg,"usage":a.usage}
}


List.zerovector=function(a){
    var erg=[];
    for(var i=0;i<Math.floor(a.value.real);i++){
        erg[erg.length]=0;
    }
    return List.realVector(erg);
}


List.zeromatrix=function(a,b){
    var erg=[];
    for(var i=0;i<Math.floor(a.value.real);i++){
        erg[erg.length]=List.zerovector(b);
    }
    return List.turnIntoCSList(erg);
}


List.transpose=function(a){
    var erg=[];
    var n=a.value[0].value.length;
    var m=a.value.length;
    for(var i=0;i<n;i++){
        var li=[]; 
        for(var j=0;j<m;j++){
            li[li.length]=a.value[j].value[i];
        }
        erg[erg.length]=List.turnIntoCSList(li)
    }
    return List.turnIntoCSList(erg);
}


List.column=function(a,b){
    var erg=[];
    var n=a.value.length;
    var i=Math.floor(b.value.real-1);
    for(var j=0;j<n;j++){
        erg[erg.length]=a.value[j].value[i];
    }
    
    return List.turnIntoCSList(erg);
}


List.row=function(a,b){
    var erg=[];
    var n=a.value[0].value.length;
    var i=Math.floor(b.value.real-1);
    for(var j=0;j<n;j++){
        erg[erg.length]=a.value[i].value[j];
    }
    
    return List.turnIntoCSList(erg);
}

List.inverse=function(a){
    var x=[];
    var y=[];
    var n=a.value.length;
    for(var i=0;i<n;i++){
        var lix=[]; 
        var liy=[]; 
        for(var j=0;j<n;j++){
            lix[lix.length]=a.value[i].value[j].value.real;
            liy[liy.length]=a.value[i].value[j].value.imag;
        }
        x[x.length]=lix;
        y[y.length]=liy;
    }
    var z=new numeric.T(x,y);
    var res=z.inv(z);
    var erg=[];
    for(var i=0;i<n;i++){
        var li=[]; 
        for(var j=0;j<n;j++){
            li[li.length]=CSNumber.complex(res.x[i][j],res.y[i][j]);
        }
        erg[erg.length]=List.turnIntoCSList(li);
    }
    return List.turnIntoCSList(erg);
}

List.det=function(a){



    return CSNumber.real(0);

}




