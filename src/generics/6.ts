type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;

const formData: Params = {
  email: 'example@example.com',
  firstName: 'Max',
  lastName: 'Phone',
  phone: '380934567890',
};

console.log(formData);
