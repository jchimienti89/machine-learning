import {Component, OnInit} from '@angular/core';

interface stuff {
  accuracy: number;
  predictions: number[][];
}

@Component({
  selector: 'app-iris',
  templateUrl: './iris.component.html',
  styleUrls: ['./iris.component.css']
})
export class IrisComponent implements OnInit {


  classNames = {
    0: 'Iris-setosa',
    1: 'Iris-versicolor',
    2: 'Iris-virginica',
  }

  featureImportance = [
    ['Petal length', 0.458107],
    ['Petal width ', 0.408683],
    ['Sepal length', 0.107372],
    ['Sepal width ', 0.025838],
  ]

  LogisticRegression: stuff = {
    accuracy: 0.9777777777777777,
    predictions: [
      [5.7999999999999998, 2.7999999999999998, 5.0999999999999996, 2.3999999999999999, 2, 2],
      [6.0, 2.2000000000000002, 4.0, 1.0, 1, 1],
      [5.5, 4.2000000000000002, 1.3999999999999999, 0.20000000000000001, 0, 0],
      [7.2999999999999998, 2.8999999999999999, 6.2999999999999998, 1.8, 2, 2],
      [5.0, 3.3999999999999999, 1.5, 0.20000000000000001, 0, 0],
      [6.2999999999999998, 3.2999999999999998, 6.0, 2.5, 2, 2],
      [5.0, 3.5, 1.3, 0.29999999999999999, 0, 0],
      [6.7000000000000002, 3.1000000000000001, 4.7000000000000002, 1.5, 1, 1],
      [6.7999999999999998, 2.7999999999999998, 4.7999999999999998, 1.3999999999999999, 1, 1],
      [6.0999999999999996, 2.7999999999999998, 4.0, 1.3, 1, 1],
      [6.0999999999999996, 2.6000000000000001, 5.5999999999999996, 1.3999999999999999, 2, 2],
      [6.4000000000000004, 3.2000000000000002, 4.5, 1.5, 1, 1],
      [6.0999999999999996, 2.7999999999999998, 4.7000000000000002, 1.2, 1, 1],
      [6.5, 2.7999999999999998, 4.5999999999999996, 1.5, 1, 1],
      [6.0999999999999996, 2.8999999999999999, 4.7000000000000002, 1.3999999999999999, 1, 1],
      [4.9000000000000004, 3.1000000000000001, 1.5, 0.10000000000000001, 0, 0],
      [6.0, 2.8999999999999999, 4.5, 1.5, 1, 1],
      [5.5, 2.6000000000000001, 4.4000000000000004, 1.2, 1, 1],
      [4.7999999999999998, 3.0, 1.3999999999999999, 0.29999999999999999, 0, 0],
      [5.4000000000000004, 3.8999999999999999, 1.3, 0.40000000000000002, 0, 0],
      [5.5999999999999996, 2.7999999999999998, 4.9000000000000004, 2.0, 2, 2],
      [5.5999999999999996, 3.0, 4.5, 1.5, 1, 1],
      [4.7999999999999998, 3.3999999999999999, 1.8999999999999999, 0.20000000000000001, 0, 0],
      [4.4000000000000004, 2.8999999999999999, 1.3999999999999999, 0.20000000000000001, 0, 0],
      [6.2000000000000002, 2.7999999999999998, 4.7999999999999998, 1.8, 2, 2],
      [4.5999999999999996, 3.6000000000000001, 1.0, 0.20000000000000001, 0, 0],
      [5.0999999999999996, 3.7999999999999998, 1.8999999999999999, 0.40000000000000002, 0, 0],
      [6.2000000000000002, 2.8999999999999999, 4.2999999999999998, 1.3, 1, 1],
      [5.0, 2.2999999999999998, 3.2999999999999998, 1.0, 1, 1],
      [5.0, 3.3999999999999999, 1.6000000000000001, 0.40000000000000002, 0, 0],
      [6.4000000000000004, 3.1000000000000001, 5.5, 1.8, 2, 2],
      [5.4000000000000004, 3.0, 4.5, 1.5, 1, 1],
      [5.2000000000000002, 3.5, 1.5, 0.20000000000000001, 0, 0],
      [6.0999999999999996, 3.0, 4.9000000000000004, 1.8, 2, 2],
      [6.4000000000000004, 2.7999999999999998, 5.5999999999999996, 2.2000000000000002, 2, 2],
      [5.2000000000000002, 2.7000000000000002, 3.8999999999999999, 1.3999999999999999, 1, 1],
      [5.7000000000000002, 3.7999999999999998, 1.7, 0.29999999999999999, 0, 0],
      [6.0, 2.7000000000000002, 5.0999999999999996, 1.6000000000000001, 1, 2],
      [5.9000000000000004, 3.0, 4.2000000000000002, 1.5, 1, 1],
      [5.7999999999999998, 2.6000000000000001, 4.0, 1.2, 1, 1],
      [6.7999999999999998, 3.0, 5.5, 2.1000000000000001, 2, 2],
      [4.7000000000000002, 3.2000000000000002, 1.3, 0.20000000000000001, 0, 0],
      [6.9000000000000004, 3.1000000000000001, 5.0999999999999996, 2.2999999999999998, 2, 2],
      [5.0, 3.5, 1.6000000000000001, 0.59999999999999998, 0, 0],
      [5.4000000000000004, 3.7000000000000002, 1.5, 0.20000000000000001, 0, 0],
    ]
  };

  public activeData: any[] = this.LogisticRegression.predictions;

  constructor() {
  }

  ngOnInit() {
  }

}