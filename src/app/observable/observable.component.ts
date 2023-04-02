import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  /*
  ---- Observable ---- 
  -> Provided by Rxjs / reactive extension javascript library
  -> Used to handled asyn operation and asyn data
  -> It is used to data in stream , Observable is a wrapper around streams of data
  -> It doesnot provide data when subscriber is not there
  -> myObservable = new Observable(callback function)
  -> Once observable throw error then it will not send any value after it & will not send any complete signal
  -> Once observable send complete signal in middle of operation then after it will not send any value 
  -> Observable can be unsubsribe at any time when myObservable.unsubscribe() calls
  -> need .subscribe()
  -> Event emitter cleans auto but subjects need to unsubscribe
  -> Event emitter extends subjects
  -> Event emitter used with output and in parent child communication

  
  ---- Subject ----

  ---- Promises ----
  -> Native to javascript 
  -> Promises executed immediately after created
  -> .then()


  */

  myObservable = new Observable((observer: Subscriber<number>) => {
    // observer is subscriber
    console.log('observable starts here');
    // Below data will be emtted by observable
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    //setTimeout(()=>{observer.error(3);},3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 6000);
  });
  // observable creation using create method

  myObservableUsingCreate = Observable.create((observer: Subscriber<any>) => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);
  });

  // observable using of operator (that can takes n number of arguments)
  // --> It auto send complete signals
  array1 = [1, 2, 3, 4, 5];
  array2 = ['A', 'B', 'C', 'D', 'E'];
  myObservableUsingOf = of(this.array1, this.array2);

  // observable using from operator can iterate a iteratable object;
  myObservableUsingFrom = from(this.array1);

  // Using observable MAP operator we can also tranform the obsevable value
  myObservableUsingFromTranformedValueByMap = this.myObservableUsingFrom.pipe(
    map((observer) => {
      return observer * observer;
    })
  );
  //Using observable FILTER operator we can also filter the obsevable data
  myObservableUsingFromTranformedValueByFilter =
    this.myObservableUsingFrom.pipe(
      filter((value) => {
        return value > 20;
      })
    );
  // Using pipe we can apply multiple operator by chaining like below map and filter
  myObservableUsingFromTranformedValueByMapAndFilter =
    this.myObservableUsingFrom.pipe(
      map((observer) => {
        return observer * observer;
      }),
      filter((observer) => {
        return observer > 20;
      })
    );

  ngOnInit() {
    // this.myObservable.subscribe(next callback, error callback, complete callback);
    this.myObservable.subscribe(
      (value: number) => {
        console.log(value, 'emitted by observable');
      },
      (error) => {
        console.log('Error Occured', error);
      },
      () => {
        console.log('observable has completed emitting all values');
      }
    );

    this.myObservableUsingOf.subscribe(
      (value) => {
        console.log(value, 'emitted by observable');
      },
      (error) => {
        console.log('Error Occured', error);
      },
      () => {
        console.log('observable has completed emitting all values');
      }
    );

    this.myObservableUsingFrom.subscribe(
      (value) => {
        console.log(value, 'emitted by observable');
      },
      (error) => {
        console.log('Error Occured', error);
      },
      () => {
        console.log('observable has completed emitting all values');
      }
    );

    this.myObservableUsingFromTranformedValueByMapAndFilter.subscribe(
      (value) => {
        console.log(value, 'emitted by observable');
      },
      (error) => {
        console.log('Error Occured', error);
      },
      () => {
        console.log('observable has completed emitting all values');
      }
    );
  }
}
