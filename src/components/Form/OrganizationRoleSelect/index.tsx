import { OrganizationRole, organizationRoleToName, orgRoleArr } from 'core/api';
import React, { FC, useMemo } from 'react';

import FormSelect, { FormSelectCommonProps } from '../Select';

interface Props extends FormSelectCommonProps {
  value?: OrganizationRole;
  exclude?: OrganizationRole[];
  onChange?: (val: OrganizationRole) => void;
}

interface SelectOpt {
  name: string;
  value: OrganizationRole;
}

export const FormOrganizationRoleSelect: FC<Props> = ({ value, exclude = [], onChange, ...commonProps }) => {
  const opts: SelectOpt[] = useMemo(
    () => orgRoleArr.filter(itm => !exclude.includes(itm)).map(itm => ({ value: itm, name: organizationRoleToName(itm) })),
    [exclude],
  );
  return (
    <FormSelect<SelectOpt>
      options={opts}
      value={value ? opts.find(itm => itm.value === value) : undefined}
      keyExtractor={itm => itm.value}
      titleExtractor={itm => itm.name}
      onChange={opt => onChange && onChange(opt.value)}
      {...commonProps}
    />
  );
};

export type FormOrganizationRoleSelectProps = Props;
export default FormOrganizationRoleSelect;
