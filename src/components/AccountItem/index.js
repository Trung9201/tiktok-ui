import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/e3f8d39ce4d0b8446e5f62ab31347daa~c5_100x100.jpeg?x-expires=1657198800&x-signature=L%2FYqa5lhICccJVaQ0crn5J4k6KI%3D"
        alt="avatar"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Quoc Trung</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>trunghips</span>
      </div>
    </div>
  );
}

export default AccountItem;
