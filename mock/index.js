import Mock from 'mockjs';
import route from './route.json'
import role from './role.json'
import message from './message.json'


export const mockStart = () => {
  Mock.mock('/api/getRoute', {
    code: 200,
    data: {
      'route': route,
      'role':role
    },
  });

  Mock.mock('/api/getMessage', {
    code: 200,
    data: {
      'message': message
    },
  });

};
