import { ModuleWithProviders, NgModule } from '@angular/core';
import { RepositoryModule } from '../repositories/repository.module';

@NgModule({
  declarations: [],
  imports: [RepositoryModule.forRoot()],
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ServiceModule,
      providers: [],
    };
  }
}
