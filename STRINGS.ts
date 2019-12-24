import * as Localization from 'expo-localization';

import i18n from 'i18n-js';

const en = {
  LOADING: 'Loading...',
  HELLO: 'Hello',
  LOGIN: 'Login',
  EMAIL: 'Email',
  PASSWORD: 'Password',
  CONFIRM_PASSWORD: 'Confirm password',
  SIGN_UP: 'Sign Up',
  LOGOUT: 'Logout',
  FORGOT_PW: 'Forgot password?',
  FIND_PW: 'Find Password',
  NAME: 'Name',
  STATUS_MSG: 'Status message',
  REGISTER: 'Register',
  SEND_LINK: 'Send Link',
  FRIEND: 'Friend',
  MESSAGE: 'Message',
  MY_PROFILE: 'My profile',
  UPDATE: 'Update',
  NO_CONTENT: 'No content',
  ADD_FRIEND: 'Add',
  DELETE_FRIEND: 'Delete',
  SEARCH_USER: 'Search User',
  CHAT: 'Chat',
  SEND: 'Send',
  WRITE_MESSAGE: 'Write message...',
  ERROR: 'Error',
  FRIEND_ADDED: 'Added to your friend.',
  FRIEND_ALREADY_ADDED: 'Already your friend.',
  SETTING: 'Setting',
  SIGN_IN_WITH_GOOGLE: 'Sign in with Google',
  SIGN_IN_WITH_FACEBOOK: 'Sign in with Facebook',
  STATUS: 'Status',
  EMAIL_FORMAT_NOT_VALID: 'Email format is not valid.',
  EMAIL_REQUIRED: 'Email is required.',
  PASSWORD_REQUIRED: 'Password is required.',
  PASSWORD_MIN: 'Password must be 6~15 charaters, including Upper/Lowercase, Number, special Character',
  NAME_REQUIRED: 'Name is required.',
  NAME_MIN: 'Name must be at least 3 characters.',
  PASSWORD_MUST_MATCH: 'Passwords must match.',
  PASSWORD_RESET: 'Reset Password',
  TAKE_A_PICTURE: 'Take a picture',
  SELSCT_FROM_ALBUM: 'Select from album',
  CANCEL: 'Cancel',
  PASSWORD_CHANGE: 'Change Password',
  PASSWORD_CURRENT: 'Enter Current Password',
  PASSWORD_NEW: 'Enter New Password',
  PASSWORD_NEW_REPEAT: 'Repeat New Password',
  NEXT: 'Next',
  OK: 'OK',
  CONFIRM: 'Confirm',
  LOGIN_INFORMATION: 'Login information',
  SIGNED_IN_WITH_GOOGLE: 'Signed in with Google',
  SIGNED_IN_WITH_FACEBOOK: 'Signed in with Facebook',
  SIGNED_IN_WITH_EMAIL: 'Signed in with Email',
};

const ko = {
  LOADING: '로딩중...',
  HELLO: '안녕하세요',
  LOGIN: '로그인',
  LOGOUT: '로그아웃',
  EMAIL: '이메일',
  PASSWORD: '비밀번호',
  CONFIRM_PASSWORD: '비밀번호 재입력',
  SIGN_UP: '회원가입',
  FORGOT_PW: '비밀번호를 잊어버리셨나요?',
  FIND_PW: '비밀번호 찾기',
  NAME: '이름',
  STATUS_MSG: '상태메세지',
  REGISTER: '가입',
  SEND_LINK: '링크 보내기',
  FRIEND: '친구',
  MESSAGE: '메세지',
  MY_PROFILE: '나의 프로필',
  UPDATE: '수정',
  NO_CONTENT: '컨텐츠가 없습니다',
  ADD_FRIEND: '친구추가',
  DELETE_FRIEND: '친구삭제',
  SEARCH_USER: '사용자 검색',
  CHAT: '채팅',
  SEND: '보내기',
  WRITE_MESSAGE: '메세지를 입력해주세요…',
  ERROR: '에러',
  FRIEND_ADDED: '친구로 등록되었습니다.',
  FRIEND_ALREADY_ADDED: '이미 친구입니다.',
  SETTING: '설정',
  SIGN_IN_WITH_GOOGLE: '구글 계정으로 시작하기',
  SIGN_IN_WITH_FACEBOOK: '페이스북 계정으로 시작하기',
  STATUS: '상태 메세지',
  EMAIL_FORMAT_NOT_VALID: '이메일 형식이 올바르지 않습니다.',
  EMAIL_REQUIRED: '이메일 주소는 필수 항목입니다.',
  PASSWORD_REQUIRED: '비밀번호는 필수 항목입니다.',
  PASSWORD_MIN: '비밀번호는 6~15자의 영문 대소문자, 숫자, 특수문자 2개 이상입니다.',
  NAME_REQUIRED: '이름은 필수 항목입니다.',
  NAME_MIN: '이름은 3글자 이상이어야 합니다.',
  PASSWORD_MUST_MATCH: '비밀번호가 일치하지 않습니다.',
  PASSWORD_RESET: '비밀번호 재설정',
  TAKE_A_PICTURE: '촬영하기',
  SELSCT_FROM_ALBUM: '앨범에서 선택하기',
  CANCEL: '취소',
  PASSWORD_CHANGE: '비밀번호 변경하기',
  PASSWORD_CURRENT: '기존 비밀번호',
  PASSWORD_NEW: '새로운 비밀번호',
  PASSWORD_NEW_REPEAT: '새로운 비밀번호 확인',
  NEXT: '다음',
  OK: '확인',
  CONFIRM: '확인',
  LOGIN_INFORMATION: '계정 정보',
  SIGNED_IN_WITH_GOOGLE: '구글 계정으로 로그인 됨',
  SIGNED_IN_WITH_FACEBOOK: '페이스북 계정으로 로그인 됨',
  SIGNED_IN_WITH_EMAIL: '이메일로 로그인 됨',
};

i18n.fallbacks = true;
i18n.translations = { en, ko };
i18n.locale = Localization.locale;

export const getString = (param: string, mapObj?: object): string => {
  if (mapObj) {
    i18n.t(param, mapObj);
  }
  return i18n.t(param);
};
