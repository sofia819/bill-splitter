import { Typography } from '@material-ui/core';

type FeesProps = {
  value: string;
  title: string;
};

const FeesItem = (props: FeesProps) => {
  return <Typography>{`${props.title}: ${props.value}`}</Typography>;
};

export default FeesItem;
