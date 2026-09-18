import React from 'react';
import { useSelector } from 'react-redux';
import {
  Helmet,
  useTranslations, useModulesManager,
} from '@openimis/fe-core';
import { makeStyles } from '@material-ui/styles';
import {
  MODULE_NAME,
  RIGHT_PAYMENT_CYCLE_SEARCH,
} from '../constants';
import PaymentCycleSearcher from '../components/PaymentCycleSearcher';

const useStyles = makeStyles((theme) => ({
  page: theme.page,
}));

function PaymentCyclesPage() {
  const modulesManager = useModulesManager();
  const classes = useStyles();
  const rights = useSelector((store) => store.core.user.i_user.rights ?? []);
  const { formatMessage } = useTranslations(MODULE_NAME, modulesManager);

  return (
    <div className={classes.page}>
      <Helmet title={formatMessage('paymentCycle.page.title')} />
      {rights.includes(RIGHT_PAYMENT_CYCLE_SEARCH)
            && <PaymentCycleSearcher />}
    </div>
  );
}

export default PaymentCyclesPage;
