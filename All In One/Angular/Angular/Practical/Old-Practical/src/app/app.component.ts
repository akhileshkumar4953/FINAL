import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainingOverviewComponent } from './TrainingOverview/training-overview/training-overview.component';
import { VariablesDataComponent } from './ts-core/variables-data/variables-data.component';
import { FunctionsComponent } from './ts-core/functions/functions.component';
import { ObjectsComponent } from './ts-core/objects/objects.component';
import { ArraysComponent } from './ts-core/arrays/arrays.component';
import { ConditionalsComponent } from './ts-core/conditionals/conditionals.component';
import { LoopsComponent } from './ts-core/loops/loops.component';
import { DomBrowserComponent } from './ts-core/dom-browser/dom-browser.component';
import { AsyncTypeScriptComponent } from './ts-core/async-type-script/async-type-script.component';
import { ES6Component } from './ts-core/es6/es6.component';
import { ErrorHandlingComponent } from './ts-core/error-handling/error-handling.component';
import { ClassesOopComponent } from './ts-adv/classes-oop/classes-oop.component';
import { ModulesComponent } from './ts-adv/modules/modules.component';
import { TypescriptComponent } from './ts-adv/typescript/typescript.component';
import { ArrayMethodsComponent } from './ts-adv/array-methods/array-methods.component';
import { JsonApiComponent } from './ts-adv/json-api/json-api.component';
import { EventHandlingComponent } from './ts-adv/event-handling/event-handling.component';
import { ClosuresScopeComponent } from './ts-adv/closures-scope/closures-scope.component';
import { GoogleAppsScriptServicesComponent } from './ts-adv/google-apps-script-services/google-apps-script-services.component';
import { DebuggingConsoleComponent } from './ts-adv/debugging-console/debugging-console.component';
import { GitCommandsComponent } from './ts-adv/git-commands/git-commands.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    TrainingOverviewComponent,

    // ts-core

    VariablesDataComponent,
    FunctionsComponent,
    ObjectsComponent,
    ArraysComponent,
    ConditionalsComponent,

    LoopsComponent,
    DomBrowserComponent,
    AsyncTypeScriptComponent,
    ES6Component,
    ErrorHandlingComponent,

    // ts-core    
    ClassesOopComponent,
    ModulesComponent,
    TypescriptComponent,
    ArrayMethodsComponent,
    JsonApiComponent,

    EventHandlingComponent,
    ClosuresScopeComponent,
    GoogleAppsScriptServicesComponent,
    DebuggingConsoleComponent,
    GitCommandsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ts-training';
}
