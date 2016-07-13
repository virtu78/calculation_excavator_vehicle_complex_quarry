var KubaturaEscavators = new Array(4)
KubaturaEscavators[0]="0-3"
KubaturaEscavators[1]="5"
KubaturaEscavators[2]="6-8"
KubaturaEscavators[3]="10-20"
var ContinueCirclus = new Array(4)
ContinueCirclus[0]="23"
ContinueCirclus[1]="25"
ContinueCirclus[2]="28"
ContinueCirclus[3]="30"
 function getContinueCirclus()  {
 var SelectedKubaturaEscavators=document.forms[0].kubesk.value
     for (var i = 0; i < KubaturaEscavators.length; i++){
   if (KubaturaEscavators[i] == SelectedKubaturaEscavators){
           break
    }
   }
 document.forms[0].concirk.value=ContinueCirclus[i]
 }

 // конец  функции для формы получения даннх о теоритической прордолжительности цикла(тц)
// массивы и функция для формы получения даннх о породах
var NamePoroda = new Array(4)
NamePoroda[0]="песок"
NamePoroda[1]="глина"
NamePoroda[2]="щебень"
NamePoroda[3]="руда"
var KoofPorodaKP = new Array(4)
KoofPorodaKP[0]="1.2"
KoofPorodaKP[1]="1.25"
KoofPorodaKP[2]="1.45"
KoofPorodaKP[3]="1.5"
var KoofPorodaKN = new Array(4)
KoofPorodaKN[0]="1"
KoofPorodaKN[1]="0.95"
KoofPorodaKN[2]="0.85"
KoofPorodaKN[3]="0.75"
 function getKoofPorodaKP()  {
 var SelectedNamePoroda=document.forms[0].nameporoda.value
     for (var i = 0; i < NamePoroda.length; i++){
   if (NamePoroda[i] == SelectedNamePoroda){
           break
    }
   }
 document.forms[0].koofporodakp.value =KoofPorodaKP[i]
 }
 function getNamePoroda()  {
 var SelectedKoofPorodaKN=document.forms[0].koofporodakn.value
     for (var i = 0; i < KoofPorodaKN.length; i++){
   if (KoofPorodaKN[i] == SelectedKoofPorodaKN){
           break
    }
   }
 document.forms[0].nameporoda2.value =NamePoroda[i]
 }
 function getKoofPorodaKN()  {
 var SelectedNamePoroda=document.forms[0].nameporoda.value
     for (var i = 0; i < NamePoroda.length; i++){
   if (NamePoroda[i] == SelectedNamePoroda){
           break
    }
   }
 document.forms[0].koofporodakn.value =KoofPorodaKN[i]
  }
 //конец  функции для формы получения данных о породах
//Вычисление скорости автосамосвала с грузом и без в зависимости от их грузоподъемности
var GruzAvto = new Array(4)
GruzAvto[0]="27-45"
GruzAvto[1]="45-75"
GruzAvto[2]="75-130"
GruzAvto[3]="130-200"
var SpeedVa = new Array(4)
SpeedVa[0]="28"
SpeedVa[1]="30"
SpeedVa[2]="32"
SpeedVa[3]="30"
function getAvtoSpeed() {
 var SelectedGruzAvto=document.forms[0].avtogruz.value
     for (var i = 0; i < GruzAvto.length; i++){
   if(GruzAvto[i] == SelectedGruzAvto){
           break
          } 
          }
     document.forms[0].speed.value=SpeedVa[i]
 }
 
 var OtkritXran = new Array(4)
OtkritXran[0]= "360000"
OtkritXran[1]="480000"
OtkritXran[2]="640000"
OtkritXran[3]="800000"
var ZakritXran = new Array(4)
ZakritXran[0]="544000"
ZakritXran[1]="800000"
ZakritXran[2]="1200000"
ZakritXran[3]="1600000"
 

    function getStoimStroitelstva()  {
  
 var SelectedGruzAvto=document.forms[0].avtogruz.value
     for (var i = 0; i < GruzAvto.length; i++){
   if(GruzAvto[i] == SelectedGruzAvto){
           break
         
    }
    }
    if(document.forms[0].tipstroy.value=="открытое"){
    document.forms[0].zatratisave.value =OtkritXran[i]
        }else{ document.forms[0].zatratisave.value =ZakritXran[i] }
       
   }
 //Стоимость строительства 1 км карьерной дороги
  var FirstKat = new Array(4)
FirstKat[0]= "1200000"
FirstKat[1]="1400000"
FirstKat[2]="1600000"
FirstKat[3]="1600000"
var SecondKat = new Array(4)
SecondKat[0]="720000"
SecondKat[1]="840000"
SecondKat[2]="1200000"
SecondKat[3]="1200000"
 
 function getStoimDorogi()  {
   var SelectedGruzAvto=document.forms[0].avtogruz.value
     for (var i = 0; i < GruzAvto.length; i++){
   if(GruzAvto[i] == SelectedGruzAvto){
           break
         
    }
    }
    if(document.forms[0].katdorogi.value=="первая"){
    document.forms[0].zatratidorogi.value =FirstKat[i]
        }else{ document.forms[0].zatratidorogi.value =SecondKat[i] }
        }
        
 //Коэфициент списочного состава шоферов       
        
     var KolichestvoRabDnei = new Array(2)
KolichestvoRabDnei[0]="305"
KolichestvoRabDnei[1]="254"

var KoeficentShofer = new Array(2)
KoeficentShofer[0]="1.32"
KoeficentShofer[1]="1.18"

var KoeficentDrugoy = new Array(1)
KoeficentDrugoy[0]="1.54"

 function getКсп() {
 if (document.forms[0].nepreriv.checked )
 {document.forms[0].koofspissostava.value=1.54
  }else{
   var SelectedKolichestvoRabDnei=document.forms[0].kolichestvodnei.value
        for (var i = 0; i < KolichestvoRabDnei.length; i++){
   if (KolichestvoRabDnei[i] == SelectedKolichestvoRabDnei){
           break
    }
    }
        document.forms[0].koofspissostava.value =KoeficentShofer[i]
    
   }
   }   
   function getRegimKariera2() { 
 if (document.forms[0].nepreriv.checked )
 {document.forms[0].kolichestvodnei2.value=357
  }else{document.forms[0].kolichestvodnei2.value=document.forms[0].kolichestvodnei.value}
  } 
            
        
   // Вычесление п.р.д. в зависимости от района  работ
 var Region = new Array(2)
Region[0]="северный"
Region[1]="средний"
var Prd = new Array(2)
Prd [0]="340"
Prd [1]="350"
function getPrd(){
var SelectedRegion=document.forms[0].region.value
     for (var i = 0; i < Region.length; i++){
   if (Region[i] == SelectedRegion){
           break
    }
    }
    document.forms[0].prd.value =Prd[i]
    } 
    function getRegion(){
var SelectedPrd=document.forms[0].prd.value
     for (var i = 0; i < Prd.length; i++){
   if (Prd[i] == SelectedPrd){
           break
    }
    }
    document.forms[0].region2.value =Region[i]
    } 
    
     //Вычисления кол-ва рабочих дней в зависимости 
//от региона проведения работ и объема ковша работающего экскаватора
var Sever = new Array(4)
Sever[0]="780"
Sever[1]="765"
Sever[2]="745"
Sever[3]="740"
var Middle = new Array(4)
Middle[0]="820"
Middle[1]="800"
Middle[2]="780"
Middle[3]="770"
    function getRabDnei() {
   var SelectedKubaturaEscavators=document.forms[0].kubesk.value
        for (var i = 0; i < KubaturaEscavators.length; i++){
   if (KubaturaEscavators[i] == SelectedKubaturaEscavators){
           break
    }
    }
    if(document.forms[0].region.value =="северный"){
    document.forms[0].rabdnei.value =Sever[i]
    }else{document.forms[0].rabdnei.value =Middle[i] }
    
   
   }

  
  
  //Норма амортизационных отчислений на автотранспорт
   var Amortizacia = new Array(4)
Amortizacia[0]= "0.37"
Amortizacia[1]="0.37"
Amortizacia[2]="0.3"
Amortizacia[3]="0.25"
function getAmortizacia() {
 var SelectedGruzAvto=document.forms[0].avtogruz.value
     for (var i = 0; i < GruzAvto.length; i++){
   if(GruzAvto[i] == SelectedGruzAvto){
           break
          } 
          }
     document.forms[0].amortizacia.value=Amortizacia[i]
 }
 //Норма затрат на ТО и текущий момент 1 автомобиля на 1000км пробега
   var NormaTo = new Array(4)
NormaTo[0]= "3200"
NormaTo[1]="8200"
NormaTo[2]="12000"
NormaTo[3]="14000"
function getNormaTo() {
 var SelectedGruzAvto=document.forms[0].avtogruz.value
     for (var i = 0; i < GruzAvto.length; i++){
   if(GruzAvto[i] == SelectedGruzAvto){
           break
          } 
          }
     document.forms[0].normato.value=NormaTo[i]
 }
  //Норма затрат на авторезину на 1000 км
   var NormaAvtorezina = new Array(4)
NormaAvtorezina[0]= "14000"
NormaAvtorezina[1]="33000"
NormaAvtorezina[2]="42000"
NormaAvtorezina[3]="50000"
function getNormaAvtorezina() {
 var SelectedGruzAvto=document.forms[0].avtogruz.value
     for (var i = 0; i < GruzAvto.length; i++){
   if(GruzAvto[i] == SelectedGruzAvto){
           break
          } 
          }
     document.forms[0].normaavtorezina.value=NormaAvtorezina[i]
 }
 //Расход топлива на 100 км пробега автомобиля
   var RashodTopliva = new Array(4)
RashodTopliva[0]= "200"
RashodTopliva[1]="320"
RashodTopliva[2]="420"
RashodTopliva[3]="670"
function getRashodTopliva() {
 var SelectedGruzAvto=document.forms[0].avtogruz.value
     for (var i = 0; i < GruzAvto.length; i++){
   if(GruzAvto[i] == SelectedGruzAvto){
           break
          } 
          }
     document.forms[0].rashodtopliva.value=RashodTopliva[i]
 }
 //Затраты на содержание автогаража
   var SoderganieGaraga = new Array(4)
SoderganieGaraga [0]= "60"
SoderganieGaraga [1]="115"
SoderganieGaraga [2]="140"
SoderganieGaraga [3]="200"
function getSoderganieGaraga () {
 var SelectedGruzAvto=document.forms[0].avtogruz.value
     for (var i = 0; i < GruzAvto.length; i++){
   if(GruzAvto[i] == SelectedGruzAvto){
           break
          } 
          }
     document.forms[0].Эгж1.value=SoderganieGaraga [i]
 }
 //Расход электроэнергии за год
   var RashodElektroenergii = new Array(4)
RashodElektroenergii [0]= "250"
RashodElektroenergii [1]="320"
RashodElektroenergii [2]="520"
RashodElektroenergii[3]="1250-2250"
function getМэу()  {
 var SelectedKubaturaEscavators=document.forms[0].kubesk.value
     for (var i = 0; i < KubaturaEscavators.length; i++){
   if (KubaturaEscavators[i] == SelectedKubaturaEscavators){
           break
    }
   }
 document.forms[0].Мэу.value=RashodElektroenergii [i]
 }
//Функции расчета по формулам по порядку
 //1. 
function getQ(){
 Ee=document.forms[0].sharpkubesk.value;
 tc=document.forms[0].concirk.value;
 Kp=document.forms[0].koofporodakp.value;
 Kn=document.forms[0].koofporodakn.value;
 Q=document.forms[0].output1.value=formatResult((3600*parseFloat(Ee))/(1.3*tc)*(parseFloat(Kn)/parseFloat(Kp))*8*0.7);
 EE=document.forms[0].sharpkubesk2.value=Ee*1;
  }
//2.
    function getNe(){
  W=document.forms[0].dobicha.value;
  ng=document.forms[0].rabdnei.value;
  Q=document.forms[0].output1.value;
  Ne=document.forms[0].output2.value=formatResult((1.5*parseFloat(W)*1000)/(parseFloat(Q)*parseFloat(ng)))
  W2=document.forms[0].dobicha2.value=W*1;
  }
//3.
  function getNeBc(){
  NeBc=document.forms[0].output3.value=formatResult(0.35*parseFloat(Ne))
  }
//4. 
function getNeObch(){
NeObch=document.forms[0].output.value=formatResult(parseFloat(Ne)+parseFloat(NeBc))
}
//5.
  function getTpogr(){
 ga=document.forms[0].gruzavto.value;
 y=document.forms[0].plotnst.value;
  Tpogr=document.forms[0].output4.value=formatResult((parseFloat(ga)*parseFloat(tc)*parseFloat(Kp))/(40*parseFloat(y)*parseFloat(Ee)*parseFloat(Kn)))
 Y=document.forms[0].plotnst2.value=y;
GA=document.forms[0].gruzavto2.value=ga;
  }
 //6. 
 function getTgr(){
 Ltr=document.forms[0].rast.value;
 Va=document.forms[0].speed.value;
 Tgr=document.forms[0].output5.value=formatResult((60*(0.6*parseFloat(Ltr))/parseFloat(Va))+60*((0.4*parseFloat(Ltr))/(0.35*parseFloat(Va))))
LTR=document.forms[0].rast2.value=Ltr;
 }
//7.
 function getTpor(){
 Tpor=document.forms[0].output6.value=formatResult(parseFloat(Tgr)/1.05)
 }
//8.
 function getTr(){
 Tr=document.forms[0].output7.value=formatResult(parseFloat(Tpogr)+parseFloat(Tgr)+parseFloat(Tpor)+1+4)
 }
//9.
 function getQacm(){
 Qacm=document.forms[0].output8.value=formatResult(60*(0.7*parseFloat(ga)*8/parseFloat(Tr)))
 }
//10.
 function getNpcm(){
 prd=document.forms[0].prd.value
 Npcm=document.forms[0].output9.value=formatResult((parseFloat(W)*1000*(y))/(parseFloat(Qacm)*3*parseFloat(prd)))
 }
//11.
 function getLcyt(){
 Lcyt=document.forms[0].output10.value=formatResult((1.05*parseFloat(Qacm)*2*parseFloat(Ltr))/(0.5*parseFloat(ga)*0.9))
 }
 function getk(){
var L=document.forms[0].output10.value
if(L>=0 & L<50){document.forms[0].output16.value=0.94
}else if(L>=50 & L<100){document.forms[0].output16.value=0.88
}else if(L>=100 & L<150){document.forms[0].output16.value=0.84
}else if(L>=150 & L<200){document.forms[0].output16.value=0.8
}else if(L>=200 & L<250){document.forms[0].output16.value=0.76
}else if(L>=250 & L<300){document.forms[0].output16.value=0.73
}else if(L>=300 & L<350){document.forms[0].output16.value=0.7
}else{document.forms[0].output16.value=0
}
}
//12.
 function getLgod(){
 Lgod=document.forms[0].output11.value=formatResult(parseFloat(Lcyt)*parseFloat(prd))
 }
//13.
 function getNcyt(){
 K=document.forms[0].output16.value
Ncyt=document.forms[0].output12.value=formatResult(parseFloat(Npcm)/parseFloat(K))
}
//14.
function  getQIagod(){
QIagod=document.forms[0].output13.value=formatResult((0.9*parseFloat(Lgod)*parseFloat(ga))/1000)
}

//Функция вычисления всего сразу есть сложение всех предыдущих функций.
function getALL(){
getContinueCirclus()+getKoofPorodaKN()+getKoofPorodaKP()+getNamePoroda()+getRabDnei()+getAvtoSpeed()+getAmortizacia()+getNormaTo()+ getPrd()+getRegion()+getQ()+getNe()+getNeBc()+getNeObch()+getTpogr()+getTgr()+getTpor()+getTr()+getQacm()+getNpcm()+getLcyt()+getLgod()+getk()+getNcyt()+getQIagod()
}
 //Доработано Функция округления результата до сотых
function format (expr, decplaces) {
	var str = "" + Math.round (eval(expr) * Math.pow(10,decplaces))
	while (str.length <= decplaces) {
		str = "0" + str
	}
	var decpoint = str.length - decplaces
	return str.substring(0,decpoint) + "." + str.substring(decpoint,str.length);
}
function formatResult (expr) {
	return  format(expr,2)
}



//ЭКОНОМИЧЕСКИЙ РАСЧЕТ
function getKa(){
Ca=document.forms[0].StoimEcs.value
Ncyt=document.forms[0].output12.value
Ka=document.forms[0].avtozatrat.value=Math.round((1.037*Ca*1000*parseFloat(Ncyt))/1000)
KA=document.forms[0].StoimEcs2.value=Ca*1
}
//Таблица стоимости строительства гаража на 1 инвентарный автомобиль
function getKaг(){
Ncyt=document.forms[0].output12.value
Kaг=document.forms[0].garagzatrat.value=Math.round((parseFloat(document.forms[0].zatratisave.value)*parseFloat(Ncyt))/1000)
} 
function getKдор(){
Ltr=document.forms[0].rast.value
Kдор=document.forms[0].dorogizatrat.value=Math.round((parseFloat(document.forms[0].zatratidorogi.value)*5*parseFloat(Ltr))/1000)
}
function getKо(){
Kaг=document.forms[0].garagzatrat.value
Ka=document.forms[0].avtozatrat.value
Kдор=document.forms[0].dorogizatrat.value
Ко=document.forms[0].zatratiavtoall.value=Math.round(parseFloat(Kaг)+parseFloat(Ka)+parseFloat(Kдор))
}
//Списочный состав шоферов (nспис)
function getNспис(){
Npcm=document.forms[0].output9.value
Nспис=document.forms[0].nспис.value=Math.round(3* parseFloat(Npcm)*parseFloat(document.forms[0].koofspissostava.value))
}
//Затраты на зарабатную плату шоферов
function getЭзш(){
Tc=document.forms[0].tarifstavka .value
Tcm=document.forms[0].prodsmeni.value
Nспис=document.forms[0].nспис.value
Эзш=document.forms[0].Эзш.value=Math.round((1.65*254*1.12*parseFloat(Tc)*parseFloat(Tcm)*parseFloat(Nспис))/1000)
}
function getЭзвс(){
Эзш=document.forms[0].Эзш.value
Эзвс=document.forms[0].Эзвс.value=Math.round((0.2*parseFloat(Эзш)*1000)/1000)
}
function getЭзо(){
Эзш=document.forms[0].Эзш.value
Эзвс=document.forms[0].Эзвс.value
Эзо=document.forms[0].Эзо.value=Math.round(parseFloat(Эзш)+parseFloat(Эзвс))
}
function getЭам(){
Ncyt=document.forms[0].output12.value;
Аа=document.forms[0].amortizacia.value;
Ca=document.forms[0].StoimEcs.value;
Lgod=document.forms[0].output11.value;
Эам=document.forms[0].Эам.value=Math.round((parseFloat(Ncyt)*parseFloat(Аа)*parseFloat(Ca)*1000*parseFloat(Lgod)/100000)/1000);
}
function getЭто(){
Ncyt=document.forms[0].output12.value;
Cto=document.forms[0].normato.value;
Lgod=document.forms[0].output11.value;
Это=document.forms[0].Это.value=Math.round((parseFloat(Ncyt)*parseFloat(Cto)*parseFloat(Lgod)/1000)/1000);
}
function getЭш(){
Ncyt=document.forms[0].output12.value;
Lgod=document.forms[0].output11.value;
Сш=document.forms[0].normaavtorezina.value;
Эш=document.forms[0].Эш.value=Math.round((parseFloat(Ncyt)*parseFloat(Сш)*parseFloat(Lgod)/1000)/1000);
}
function getЭгор(){
Ncyt=document.forms[0].output12.value;
Lgod=document.forms[0].output11.value;
Цгор=document.forms[0].Цгор.value;
Сгор=document.forms[0].rashodtopliva.value;
Эгор=document.forms[0].Эгор.value=Math.round((parseFloat(Ncyt)*parseFloat(Сгор)*parseFloat(Цгор)*(parseFloat(Lgod)/100))/1000);
}
function getРдт(){
Ncyt=document.forms[0].output12.value;
Lgod=document.forms[0].output11.value;
Сгор=document.forms[0].rashodtopliva.value;
Рдт=document.forms[0].Рдт.value=Math.round(parseFloat(Ncyt)*parseFloat(Сгор)*parseFloat(Lgod)/100000)
}
function getЭм(){
Ncyt=document.forms[0].output12.value;
Сгор=document.forms[0].rashodtopliva.value;
Цгор=document.forms[0].Цгор.value;
Lgod=document.forms[0].output11.value;
Эм=document.forms[0].Эм.value=Math.round((parseFloat(Ncyt)*0.084*parseFloat(Сгор)*5*parseFloat(Цгор)*parseFloat(Lgod)/100)/1000)
}
function getЭгж(){
Ncyt=document.forms[0].output12.value;
Эгж1=document.forms[0].Эгж1.value;
Эгж=document.forms[0].Эгж.value=Math.round((5200*parseFloat(Ncyt)*parseFloat(Эгж1))/1000)
}
function getЭдор(){
Kдор=document.forms[0].dorogizatrat.value;
Эдор=document.forms[0].Эдор.value=Math.round((0.084*parseFloat(Kдор)*1000)/1000)
}
function getЭао(){
Эзо=document.forms[0].Эзо.value;
Эам=document.forms[0].Эам.value;
Это=document.forms[0].Это.value;
Эш=document.forms[0].Эш.value;
Эгор=document.forms[0].Эгор.value;
Эм=document.forms[0].Эм.value;
Эгж=document.forms[0].Эгж.value;
Эдор=document.forms[0].Эдор.value;
Эао=document.forms[0].Эао.value=Math.round(parseFloat(Эзо)+parseFloat(Эам)+parseFloat(Это)+parseFloat(Эш)+parseFloat(Эгор)+parseFloat(Эм)+parseFloat(Эгж)+parseFloat(Эдор));
}
function getКэ(){
Сэ=document.forms[0].Сэ.value;
NeObch=document.forms[0].output.value
Кэ=document.forms[0].Кэ.value=Math.round((Сэ*1000*parseFloat(NeObch))/1000);
}
function getЭзэ(){
NeObch=document.forms[0].output.value;
Tcm=document.forms[0].prodsmeni.value;
Tc=document.forms[0].tarifstavka .value;
ng=document.forms[0].rabdnei.value;
Эзэ=document.forms[0].Эзэ.value=Math.round((1.55*parseFloat(Tc)*2*parseFloat(NeObch)*parseFloat(Tcm)*parseFloat(ng)*1.12)/1000);
}
function getЭзвсп(){
Эзэ=document.forms[0].Эзэ.value;
Эзвсп=document.forms[0].Эзвсп.value=Math.round((0.4*parseFloat(Эзэ)*1000)/1000);
}
function getЭзоэ(){
Эзэ=document.forms[0].Эзэ.value;
Эзвсп=document.forms[0].Эзвсп.value;
Эзоэ=document.forms[0].Эзоэ.value=Math.round(1.9*parseFloat(Эзэ)+parseFloat(Эзвсп))
}
function getЭаэ(){
NeObch=document.forms[0].output.value;
Сэ=document.forms[0].Сэ.value;
Эаэ=document.forms[0].Эаэ.value=Math.round((parseFloat(NeObch)*0.057*document.forms[0].Сэ.value*1000)/1000)
}
function getЭтоэ(){
NeObch=document.forms[0].output.value;
Сэ=document.forms[0].Сэ.value;
Этоэ=document.forms[0].Этоэ.value=Math.round((0.15*parseFloat(Сэ)*1000*parseFloat(NeObch))/1000)
}
function getЭмэ(){
NeObch=document.forms[0].output.value;
Сэ=document.forms[0].Сэ.value;
Эмэ=document.forms[0].Эмэ.value=Math.round((0.07*parseFloat(Сэ)*1000*parseFloat(NeObch))/1000)
}
function getРэл(){
NeObch=document.forms[0].output.value;
ng=document.forms[0].rabdnei.value;
Мэу=document.forms[0].Мэу.value;
Рэл=document.forms[0].Рэл.value=Math.round((1.1*0.7*0.7*parseFloat(Мэу)*((parseFloat(NeObch)*parseFloat(ng)*8)/0.5))/1000)
}
function getЭэл(){
Рэл=document.forms[0].Рэл.value;
Цэл=document.forms[0].Цэл.value;
Ээл=document.forms[0].Ээл.value=Math.round((parseFloat(Рэл)*1000*parseFloat(Цэл))/1000)
}
function getЭэо(){
Эзоэ=document.forms[0].Эзоэ.value;
Эаэ=document.forms[0].Эаэ.value;
Этоэ=document.forms[0].Этоэ.value;
Эмэ=document.forms[0].Эмэ.value;
Ээл=document.forms[0].Ээл.value;
Ээо=document.forms[0].Ээо.value=Math.round(parseFloat(Эзоэ)+parseFloat(Эаэ)+parseFloat(Этоэ)+parseFloat(Эмэ)+parseFloat(Ээл));
}
function getКвсе(){
Ко=document.forms[0].zatratiavtoall.value;
Кэ=document.forms[0].Кэ.value;
Квсе=document.forms[0].Квсего.value=Math.round(parseFloat(Ко)+parseFloat(Кэ))
}
function getЭвсе(){
Эао=document.forms[0].Эао.value;
Ээо=document.forms[0].Ээо.value;
Эвсе=document.forms[0].Эвсего.value=Math.round(parseFloat(Эао)+parseFloat(Ээо))
}
function getЭAll(){
getAmortizacia()+getNormaAvtorezina()+getStoimDorogi()+getStoimStroitelstva()+getNormaTo()+getКсп()+getNormaAvtorezina()+getSoderganieGaraga ()+getRashodTopliva()+getRegimKariera2()+getМэу()+getKa()+getKaг()+getKдор()+getKо()+getNспис()+getЭзш()+getЭзвс()+getЭзо()+getЭам()+getЭто()+getЭш()+getЭгор()+getРдт()+getЭм()+getЭгж()+getЭдор()+getЭао()+getКэ()+getЭзэ()+getЭзвсп()+getЭзоэ()+getЭаэ()+getЭтоэ()+getЭмэ()+getРэл()+getЭэл()+getЭэо()+getКвсе()+ getЭвсе()
}
function makeNewWindow(){
var newWind=window.open("", "NewWindow", "status,resizable,location,dependent, scrollbars")
if (newWind.opener==null){
newWind.opener=self
}
}
function closeNewWindow(){
if(newWindow){
newWindow.close()
newWindow=null
}
}