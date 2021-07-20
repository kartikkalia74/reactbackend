import Controller from "../../plugin/controller";

class FollowRequestController extends Controller {
  static getInstance() {
    return new FollowRequestController();
  }
  /**
   * @description send request to other user
   */
  sendRequest({ sendBy, sendTo }) {}

  /**
   * @description respond to follow requst
   * @param param0
   */
  respondToRequest({ requestId, status }) {}
}

export default FollowRequestController.getInstance();
