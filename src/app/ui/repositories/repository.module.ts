import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  declarations: [],
})
export class RepositoryModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: RepositoryModule,
      providers: [],
    };
  }
}
