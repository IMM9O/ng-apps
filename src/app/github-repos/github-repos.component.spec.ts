/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GithubReposComponent } from './github-repos.component';

describe('GithubReposComponent', () => {
  let component: GithubReposComponent;
  let fixture: ComponentFixture<GithubReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});