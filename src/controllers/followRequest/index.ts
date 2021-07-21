import Controller from "../../plugin/controller";

class FollowRequestController extends Controller {
  static getInstance() {
    return new FollowRequestController();
  }
  /**
   * @description send request to other user
   */
  async sendRequest({ sendBy, sendTo }) {
    try{
      await new this.db.FollowRequest({sendBy , sendTo}).save()
    }catch(err){
      throw err;
    }
  }

  /**
   * @description respond to follow requst
   * @param param0
   */
  async respondToRequest({ requestId, status }) {
    try{
      await  this.db.FollowRequest.findByIdAndUpdate(requestId,{$set:{status}})
    }catch(err){
      throw err;
    }
    
  }
}

export default FollowRequestController.getInstance();
