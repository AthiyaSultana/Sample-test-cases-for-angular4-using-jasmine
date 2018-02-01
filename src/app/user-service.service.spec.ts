import {inject, TestBed} from '@angular/core/testing';

import {UserServiceService} from './user-service.service';
import {HttpClientModule} from '@angular/common/http';

describe('UserServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServiceService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([UserServiceService], (service: UserServiceService) => {
    expect(service).toBeTruthy();
  }));


  /* it('should get user list', inject([UserServiceService], (userService: UserServiceService) => {
     userService.getUsers().subscribe((users: any) => {
     }, err => fail(err));
   }));*/
  it('should get user data', () => {
    const userService = TestBed.get(UserServiceService);
    userService.getUsers().subscribe((users) => {
      // console.log(`user ${users}`);
      expect(users).not.toBeDefined();
      expect(Array.isArray(users)).toBeTruthy();
      expect(users.length).toBeGreaterThan(0);
      expect(users[0].id).toEqual(1);
      expect(users[0].id).not.toEqual(2);
      expect(users[0].name).toBe('vijaya');
      expect(users[0].name).not.toEqual(2);
      expect(users[0].username).toContain('Bret');
      expect(users[0]).toEqual({
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'address': {
          'street': 'Kulas Light', 'suite': 'Apt. 556', 'city': 'Gwenborough',
          'zipcode': '92998-3874', 'geo': {'lat': '-37.3159', 'lng': '81.1496'}
        },
        'phone': '1-770-736-8031 x56442',
        'website': 'hildegard.org',
        'company': {
          'name': 'Romaguera-Crona',
          'catchPhrase': 'Multi-layered client-server neural-net',
          'bs': 'harness real-time e-markets'
        }
      });
    });
  });
  xit('success', (done) => {
    const userService = TestBed.get(UserServiceService);
    userService
      .getUsers()
      .then((response) => {
        // console.log('My resp', response);
        expect(response).toEqual('200');
        done();
      })
      .catch(done.fail);
  });

});

