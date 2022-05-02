import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'Txl9y4sH9Y6hNnnCcjVzvkuwl4dehKnl'
  private _historial : string [] = [] ;
 
 
 get historial(){
   return [...this._historial];

 }

 buscarGifs(query:string=''){
 
  query=query.trim().toLowerCase();

  
  this._historial.unshift(query)

  this._historial = this._historial.splice(0,10)

  this._historial= this.historial.filter((query,index)=>{
    
     return this.historial.indexOf(query) === index;

  })


  console.log(this._historial)
 }
 
}
