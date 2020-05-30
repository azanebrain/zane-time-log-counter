import { Log } from './log.model'

export const MOCK_LOGS: Log[] = [
  {
    date: '2019-11-18',
    organize: {
      organize: 42
    },
    'awesome-side-project': {
      organize: 147,
      research: 4,
      'front-end': {
        dev: 18,
        test: 51
      }
    }
  },
  {
    date: '2019-11-19',
    organize: {
      organize: 20
    },
    'awesome-side-project': {
      organize: 5,
      research: 40,
      'back-end': {
        stup: 57
      }
    }
  },
  {
    date: '2019-11-20',
    'awesome-side-project': {
      organize: 12,
      'front-end': {
        dev: 61
      }
    },
    'other-project': {
      marketing: 42
    }
  },
]
