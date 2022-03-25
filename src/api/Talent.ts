import BaseClient from '@/api/BaseClient';

const resource = '/v1';

class TalentRepository {
  client = BaseClient

  getRecommendList() {
    return this.client.get(`${resource}/taling-recommend`);
  }

  getTalingBestList() {
    return this.client.get(`${resource}/taling-best`);
  }
}

const repository = new TalentRepository();

export default repository;
