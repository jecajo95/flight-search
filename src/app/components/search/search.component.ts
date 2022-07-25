import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  checkedDestinations: string[] = [];
  cities: string[] = ['Rome', 'Berlin', 'Vienna', 'Linz', 'Istanbul'];
  connections: any = {
    Berlin: ['Linz'],
    Istanbul: ['Berlin'],
    Linz: ['Berlin', 'Rome', 'Vienna'],
    Rome: ['Berlin', 'Istanbul'],
  };
  connectionResults: string[][] = [];
  cityForm!: FormGroup;
  connectionForm!: FormGroup;
  connectionsForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.cityForm = new FormGroup({
      city: new FormControl('', [Validators.required]),
    });
    this.connectionForm = new FormGroup({
      startDestination: new FormControl('', [Validators.required]),
      finalDestination: new FormControl('', [Validators.required]),
    });
    this.connectionsForm = new FormGroup({
      startDestination: new FormControl('', [Validators.required]),
      finalDestination: new FormControl('', [Validators.required]),
    });
  }

  addCity() {
    const city = this.cityForm.value.city;
    this.cities.push(city);
    this.cityForm.reset();
  }

  addConnection() {
    if (!this.connections[this.connectionForm.value.startDestination]) {
      this.connections[this.connectionForm.value.startDestination] = [];
    }

    this.connections[this.connectionForm.value.startDestination].push(
      this.connectionForm.value.finalDestination
    );
  }

  changeConnectionFrom(city: string) {
    this.connectionsForm?.get('startDestination')?.setValue(city, {
      onlySelf: true,
    });
  }

  changeConnectionTo(city: string) {
    this.connectionsForm?.get('finalDestination')?.setValue(city, {
      onlySelf: true,
    });
  }

  changeRouteFrom(city: string) {
    this.connectionForm?.get('startDestination')?.setValue(city, {
      onlySelf: true,
    });
  }

  changeRouteTo(city: string) {
    this.connectionForm?.get('finalDestination')?.setValue(city, {
      onlySelf: true,
    });
  }

  checkOtherConnections(connection: string) {
    const startDestination = this.connectionsForm.value.startDestination;
    const finalDestination = this.connectionsForm.value.finalDestination;
    const otherConnections = this.connections[connection];

    if (otherConnections !== undefined) {
      for (let otherConnection of otherConnections) {
        if (this.checkedDestinations.indexOf(connection) === -1) {
          this.checkedDestinations.push(connection);
          if (otherConnection === finalDestination) {
            const checkedDestinationsCopy = JSON.parse(
              JSON.stringify(this.checkedDestinations)
            );
            checkedDestinationsCopy.unshift(startDestination);
            checkedDestinationsCopy.push(finalDestination);

            this.connectionResults.push(checkedDestinationsCopy);
          } else {
            this.checkOtherConnections(otherConnection);
          }
        }
      }
    }
  }

  createConnectionsNames(connections: string[]): string {
    const startDestination = this.connectionsForm.value.startDestination;
    const finalDestination = this.connectionsForm.value.finalDestination;

    let name = startDestination;
    for (const connection of connections) {
      name = name + ' -> ' + connection;
    }

    name = name + ' -> ' + finalDestination;

    return name;
  }

  deleteCity(cityToDelete: string) {
    this.cities = this.cities.filter((city) => cityToDelete !== city);
  }

  deleteConnection(connectionStart: string, connectionEnd: string) {
    this.connections[connectionStart] = this.connections[
      connectionStart
    ].filter((connection: any) => connectionEnd !== connection);
  }

  searchConnections() {
    this.checkedDestinations = [];
    this.connectionResults = [];
    const startDestination = this.connectionsForm.value.startDestination;
    const finalDestination = this.connectionsForm.value.finalDestination;
    const directConnections = this.connections[startDestination];

    if (directConnections) {
      for (let connection of directConnections) {
        if (connection === finalDestination) {
          this.connectionResults.push([startDestination, finalDestination]);
        } else {
          this.checkOtherConnections(connection);
        }
      }
    }
  }
}
