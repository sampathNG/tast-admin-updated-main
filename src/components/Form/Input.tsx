import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const CustomInput = ({
  type,
  name,
  label,
  className,
  placeholder,
  disabled,
  defaultValue,
  style,
  value,
  onChange,
  addonAfter
}: {
  type: string;
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: any;
  style?: any;
  value?: string;
  onChange?: (e: any) => void;
  addonAfter?: React.ReactNode;
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) =>
          type === "password" ? (
            <Form.Item label={label}>
              <Input.Password
                {...field}
                type={type}
                id={name}
                className={className}
                size="large"
                disabled={disabled}
                placeholder={placeholder}
              />
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </Form.Item>
          ) : (
            <Form.Item label={label}>
              <Input
                style={style}
                {...field}
                type={type}
                id={name}
                size="large"
                disabled={disabled}
                placeholder={placeholder}
                className={className}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                addonAfter={addonAfter}
              />
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </Form.Item>
          )
        }
      />
    </div>
  );
};

export default CustomInput;
