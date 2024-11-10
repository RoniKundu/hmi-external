import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { ChartModule } from "primeng/chart";
import { DropdownModule } from "primeng/dropdown";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { MultiSelectModule } from "primeng/multiselect";
import { PasswordModule } from "primeng/password";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ToggleButtonModule } from "primeng/togglebutton";
import { TooltipModule } from "primeng/tooltip";

export const IMPORT_MODULES = [
    CommonModule, RouterModule,FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule,
    TableModule, DropdownModule, ToggleButtonModule, ChartModule, MultiSelectModule, ButtonModule, 
    TooltipModule, MenuModule, TagModule, DynamicDialogModule
];

export const STACKBLITZ_IMPORT_MODULES = `
[
    BrowserModule, CommonModule, RouterModule,FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule,
    TableModule, DropdownModule, ToggleButtonModule, ChartModule, MultiSelectModule, ButtonModule, 
    TooltipModule, MenuModule, TagModule, DynamicDialogModule
]`;

export const STACKBLITZ_IMPORT_STATEMENT = `
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { ChartModule } from "primeng/chart";
import { DropdownModule } from "primeng/dropdown";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { MultiSelectModule } from "primeng/multiselect";
import { PasswordModule } from "primeng/password";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ToggleButtonModule } from "primeng/togglebutton";
import { TooltipModule } from "primeng/tooltip";
`;

export const STACKBLITZ_MAIN_TS = `
    import './polyfills';
    import { enableProdMode } from '@angular/core';
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    
    import { AppModule } from './app/app.module';
    
    platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
            window['ngRef'].destroy();
        }
        window['ngRef'] = ref;
        
        // Otherwise, log the boot error
    }).catch(err => console.error(err));`;

export const STACKBLITZ_APP_MODULE_TS = `
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    ${STACKBLITZ_IMPORT_STATEMENT}

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: ${STACKBLITZ_IMPORT_MODULES},
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }`;

export const STACKBLITZ_ANGULAR_JSON = `
{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
        "angular-editor": {
        "projectType": "application",
        "schematics": {},
        "root": "",
        "sourceRoot": "src",
        "prefix": "app",
        "architect": {
            "build": {
            "builder": "@angular-devkit/build-angular:browser",
            "options": {
                "outputPath": "dist/angular-editor",
                "index": "src/index.html",
                "main": "src/main.ts",
                "polyfills": "src/polyfills.ts",
                "tsConfig": "tsconfig.app.json",
                "aot": false,
                "assets": [
                "src/favicon.ico",
                "src/assets"
                ],
                "styles": [
                "src/styles.css"
                ],
                "scripts": []
            },
            "configurations": {
                "production": {
                "fileReplacements": [
                    {
                    "replace": "src/environments/environment.ts",
                    "with": "src/environments/environment.prod.ts"
                    }
                ],
                "optimization": true,
                "outputHashing": "all",
                "sourceMap": false,
                "extractCss": true,
                "namedChunks": false,
                "aot": true,
                "extractLicenses": true,
                "vendorChunk": false,
                "buildOptimizer": true,
                "budgets": [
                    {
                    "type": "initial",
                    "maximumWarning": "2mb",
                    "maximumError": "5mb"
                    }
                ]
                }
            }
            },
            "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "options": {
                "browserTarget": "angular-editor:build"
            },
            "configurations": {
                "production": {
                "browserTarget": "angular-editor:build:production"
                }
            }
            }
        }
        }
    },
    "defaultProject": "angular-editor"
}`;

export const STACKBLITZ_INDEX_HTML = `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Angular Editor</title>
            <base href="/">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <app-root></app-root>
        </body>
    </html>`;

export const STACKBLITZ_POLLYFILL_TS = "import 'zone.js';";

export const STACKBLITZ_DEPENDENCIES = {
    "@angular/animations": "14.1.3",
    "@angular/common": "14.1.3",
    "@angular/compiler": "14.1.3",
    "@angular/core": "14.1.3",
    "@angular/forms": "14.1.3",
    "@angular/platform-browser": "14.1.3",
    "@angular/platform-browser-dynamic": "14.1.3",
    "@angular/router": "14.1.3",
    "@angular/cdk": "^14.1.3",
    "rxjs": "~6.6.0",
    "tslib": "^2.0.0",
    "zone.js": "~0.11.4",
    "chart.js": "^4.1.1",
    "xlsx": "0.18.5",
    "file-saver": "2.0.5",
    "jspdf": "2.5.1",
    "jspdf-autotable": "3.5.29",
    "primeicons": "^4.1.0",
    "primeng": "^14.2.3"
};