import type { TextStyle, ViewStyle } from 'react-native'

// Padding
export const padding_base: number = 4
export const padding_xs = padding_base * 2
export const padding_sm = padding_base * 3
export const padding_md = padding_base * 4
export const padding_lg = padding_base * 6
export const padding_xl = padding_base * 8

// 标准通用色
export const white: string = '#FFF'
export const primary: string = '#0065FE'
export const success: string = '#24B356'
export const warning: string = '#FE7A33'
export const error: string = '#FF3341'
export const auxiliary_color_1: string = '#7566FF'
export const auxiliary_color_2: string = '#009DF2'
export const auxiliary_color_3: string = '#FE9D00'
export const auxiliary_color_4: string = '#FE5500'
export const auxiliary_color_5: string = '#6B7D99'

export const active_opacity: number = 0.6
export const active_img_opacity: number = 0.4
// 文字颜色
export const text_color_1: string = '#11151A'
export const text_color_2: string = '#5A6068'
export const text_color_3: string = '#8C9199'
export const text_color_4: string = '#B9BDC5'
// 页面背景
export const page_bg_color: string = '#ECEEF1'

export const underlay_color: string = 'transparent'
export const underlay_color_ddd: string = '#F7F9FC'
// 分割线颜色
export const divider_color_1: string = '#E8E8E8'
export const divider_color_2: string = '#F2F2F2'

// 字号
export const font_size_h1: number = 22
export const font_size_h2: number = 20
export const font_size_h3: number = 18
export const font_size_h4: number = 16
export const font_size_h5: number = 15
export const font_size_text: number = 14
export const font_size_subtitle: number = 12

export const line_height_xs: number = 14
export const line_height_sm: number = 18
export const line_height_md: number = 20
export const line_height_lg: number = 22

export const background_color_1: string = '#EDEFF2'
export const background_color_2: string = '#F7F9FC'

// Animation
export const animation_duration_base: number = 300
export const animation_duration_fast: number = 200

// Border
export const border_color = divider_color_2
export const border_width_base: number = 1
export const border_radius_sm: number = 4
export const border_radius_md: number = 8
export const border_radius_lg: number = 16
export const border_radius_max: number = 999

// 似乎需要调用的时候传入比较合适
export const page_header_height: number = 44

// ActionSheet
export const action_sheet_header_height: number = 48
export const action_sheet_header_font_size = font_size_h4
export const action_sheet_description_color = text_color_2
export const action_sheet_description_font_size = font_size_text
export const action_sheet_description_line_height = line_height_md
export const action_sheet_item_background = white
export const action_sheet_item_font_size = font_size_h5
export const action_sheet_item_disabled_text_color = text_color_3
export const action_sheet_subname_color = text_color_1
export const action_sheet_subname_font_size = font_size_text
export const action_sheet_subname_line_height = line_height_sm
export const action_sheet_cancel_text_color = text_color_2
export const action_sheet_cancel_padding_top = padding_xs
export const action_sheet_cancel_padding_color = background_color_1
export const action_sheet_loading_icon_size: number = 22

// Badge
export const badge_size: number = 16
export const badge_color = white
export const badge_padding_vertical: number = 0
export const badge_padding_horizontal: number = 3
export const badge_font_size = 10
export const badge_font_weight: TextStyle['fontWeight'] = 'bold'
export const badge_background_color = error
export const badge_dot_size: number = 8

// Button
export const button_mini_height: number = 24
export const button_mini_font_size = font_size_subtitle
export const button_mini_loading_size: number = 14
export const button_small_height: number = 32
export const button_small_font_size = font_size_text
export const button_small_loading_size: number = 20
export const button_normal_height: number = 40
export const button_normal_font_size = font_size_h5
export const button_normal_loading_size: number = 20
export const button_large_height: number = 50
export const button_large_font_size = font_size_h4
export const button_large_loading_size: number = 24
export const button_default_height: number = 44
// export const button_default_line_height: number = 1.2
export const button_default_font_size = font_size_h4
export const button_default_loading_size: number = 24
export const button_default_color = primary
export const button_default_background_color = white
export const button_default_border_color = white
export const button_primary_color = white
export const button_primary_background_color = primary
export const button_primary_border_color = primary
export const button_success_color = white
export const button_success_background_color = success
export const button_success_border_color = success
export const button_error_color = white
export const button_error_background_color = error
export const button_error_border_color = error
export const button_warning_color = white
export const button_warning_background_color = warning
export const button_warning_border_color = warning
export const button_info_color = primary
export const button_info_background_color: string = '#EFF5FE'
export const button_info_border_color: string = '#EFF5FE'
export const button_link_color = primary
export const button_link_background_color: string = 'transparent'
export const button_link_border_color: string = 'transparent'
export const button_border_width = border_width_base
export const button_border_radius = border_radius_sm
export const button_ghost_background_color: string = 'transparent'
// export const button_ghost_underlay_color = border_color // 按钮按下去的颜色
export const button_disabled_opacity = active_opacity
export const button_active_opacity: number = 0.4

// Cell
export const cell_group_title_padding_horizontal = padding_sm
export const cell_group_title_padding_top = padding_xs
export const cell_group_title_padding_bottom = padding_xs
export const cell_group_title_color = text_color_1
export const cell_group_title_font_size = font_size_h5
export const cell_group_title_line_height: number = 28
export const cell_border_color = border_color
export const cell_icon_size = font_size_h5
export const cell_icon_color = text_color_3
export const cell_active_color = underlay_color_ddd
export const cell_font_size = font_size_text
export const cell_background_color = white
export const cell_padding_vertical = padding_sm
export const cell_padding_horizontal = padding_sm
export const cell_mini_height: number = 50
export const cell_title_text_color = text_color_1
export const cell_title_height: number = 32
export const cell_title_line_height: number = 22
export const cell_value_text_color = text_color_2
export const cell_required_color = error

// Checkbox
export const checkbox_icon_size: number = 20
export const checkbox_icon_color = text_color_3
export const checkbox_icon_disabled_color = text_color_2
export const checkbox_checked_icon_color = primary
export const checkbox_checked_icon_disabled_color = text_color_2
export const checkbox_label_color = text_color_1
export const checkbox_label_margin = padding_xs
export const checkbox_disabled_label_color = text_color_3

// Collapse
export const collapse_transition_duration = animation_duration_base
export const collapse_title_font_size = font_size_h4
export const collapse_title_line_height = 24
export const collapse_title_padding_vertical: number = 10
export const collapse_title_padding_horizontal: number = padding_md
export const collapse_title_text_color = text_color_1
export const collapse_title_icon_color = text_color_1
export const collapse_title_icon_size = font_size_h4
export const collapse_title_border_color = border_color
export const collapse_title_background_color = white
export const collapse_content_background_color = white
export const collapse_content_padding_horizontal = padding_md

// Dialog
export const dialog_width: number = 320
// export const dialog_small_screen_width: string = '90%'
export const dialog_font_size = font_size_h4
export const dialog_transition = animation_duration_base
export const dialog_border_radius: number = 16
export const dialog_background_color = white
export const dialog_header_font_weight: TextStyle['fontWeight'] = 'bold'
export const dialog_header_line_height: number = 24
export const dialog_header_padding_top: number = 26
// export const dialog_header_isolated_padding_vertical = padding_lg
export const dialog_message_padding_vertical = padding_lg
export const dialog_message_padding_horizontal = padding_lg
export const dialog_message_font_size = font_size_text
export const dialog_message_line_height = line_height_md
// export const dialog_message_max_height: number = 60 // 60vh
export const dialog_has_title_message_text_color = text_color_2
export const dialog_has_title_message_padding_top = padding_xs
export const dialog_button_height: number = 50
// export const dialog_round_button_height: number = 36
export const dialog_confirm_button_text_color = primary
export const dialog_cancel_button_text_color = text_color_2

// Divider
export const divider_margin_vertical = padding_md
export const divider_margin_horizontal = padding_md
export const divider_text_color = text_color_1
export const divider_font_size = font_size_h5
export const divider_line_height: number = 24
export const divider_border_color = divider_color_1
export const divider_content_padding = padding_md
export const divider_content_left_width: string = '10%'
export const divider_content_right_width: string = '10%'

// DropdownMenu
export const dropdown_menu_height: number = 48
export const dropdown_menu_background_color = white
export const dropdown_menu_title_font_size: number = 15
export const dropdown_menu_title_text_color = text_color_1
export const dropdown_menu_title_active_text_color = primary
export const dropdown_menu_title_disabled_text_color = text_color_3
export const dropdown_menu_title_padding_horizontal = padding_base
export const dropdown_menu_title_line_height = line_height_lg
export const dropdown_menu_title_icon_size: number = 12
export const dropdown_menu_option_active_color = primary

// Empty
export const empty_image_width: number = 130
export const empty_image_height: number = 115
export const empty_text_color = text_color_3
export const empty_text_font_size = font_size_text
export const empty_text_line_height: number = 20

// Icon
export const icon_color = text_color_2
export const icon_disabled_color = text_color_4

// Loading
export const loading_text_color = text_color_1
export const loading_text_font_size = font_size_h5
export const loading_spinner_color = primary
export const loading_spinner_size: number = 24
export const loading_spinner_animation_duration: number = 800

// NavBar
export const nav_bar_arrow_size: number = 20
export const nav_bar_height: number = 44
export const nav_bar_background_color: string = '#FFF'
export const nav_bar_title_text_color = text_color_1
export const nav_bar_title_font_size = font_size_h4
export const nav_bar_icon_color = text_color_1

// NoticeBar
export const notice_bar_padding_vertical = padding_xs
export const notice_bar_padding_horizontal = padding_md
export const notice_bar_background_color: string = '#feede5'
export const notice_bar_text_color: string = '#fe7a33'
export const notice_bar_text_line_height: number = 20
export const notice_bar_text_font_size = font_size_text
export const notice_bar_icon_size = font_size_text
export const notice_bar_icon_margin_horizontal = padding_xs

// export const notice_bar_default_background_color: string = '#feede5'
// export const notice_bar_default_color: string = '#fe7a33'
// export const notice_bar_icon_default_color: string = '#fe7a33'
// export const notice_bar_primary_background_color: string = '#e6f0ff'
// export const notice_bar_primary_color: string = '#11151a'
// export const notice_bar_icon_primary_color: string = '#0065fe'
// export const notice_bar_success_background_color: string = '#ebfff2'
// export const notice_bar_success_color: string = '#11151a'
// export const notice_bar_icon_success_color: string = '#24b356'
// export const notice_bar_error_background_color: string = '#ffebec'
// export const notice_bar_error_color: string = '#11151a'
// export const notice_bar_icon_error_color: string = '#ff3341'
// export const notice_bar_warning_background_color: string = '#ffefd9'
// export const notice_bar_warning_color: string = '#11151a'
// export const notice_bar_icon_warning_color: string = '#fe7a33'
// export const notice_bar_mini_font_size: number = font_size_subtitle
// export const notice_bar_small_font_size: number = font_size_text
// export const notice_bar_normal_font_size: number = font_size_text
// export const notice_bar_large_font_size: number = font_size_h4

// Notify
export const notify_text_color = white
export const notify_padding_vertical = padding_xs
export const notify_padding_horizontal = padding_md
export const notify_font_size = font_size_h5
export const notify_line_height = line_height_md
export const notify_primary_background_color = primary
export const notify_success_background_color = success
export const notify_error_background_color = error
export const notify_warning_background_color = warning

// Overlay
export const overlay_z_index: number = 10
export const overlay_background_color: string = 'rgba(0, 0, 0, 0.7)'

// Popup
export const popup_background_color = white
export const popup_round_border_radius = border_radius_lg
// export const popup_header_height: number = 50
// export const popup_header_font_size = font_size_h3
// export const popup_header_text_color = text_color_1
// export const popup_header_padding_horizontal = padding_xs
export const popup_close_icon_size: number = 24
export const popup_close_icon_color = text_color_2
// export const popup_close_icon_margin = padding_md

// Progress
export const progress_height: number = 4
export const progress_color = primary
export const progress_background_color = background_color_1
export const progress_pivot_horizontal_padding: number = 5
export const progress_pivot_text_color = white
export const progress_pivot_font_size = font_size_subtitle
export const progress_pivot_line_height_scale: number = 1.6
export const progress_pivot_background_color = primary
export const progress_page_background_color = white

// SelectPopup
export const select_popup_min_height: number = 270
export const select_popup_option_text_line_height: number = 50
export const select_popup_body_padding_horizontal = padding_sm

// Steps
export const steps_background_color = primary
export const steps_padding_vertical = padding_md
export const steps_padding_horizontal = padding_lg
export const steps_icon_dot_size = 10
export const steps_icon_dot_active_size = 16
export const steps_title_size = font_size_h5
export const steps_title_color = white

// Switch
export const switch_size: number = 30
export const switch_width_ratio: number = 2 // 原变量中使用了 em，这里改成对应的比例
export const switch_height_ratio: number = 1 // 原变量中使用了 em，这里改成对应的比例
export const switch_node_size_ratio: number = 1 // 原变量中使用了 em，这里改成对应的比例
export const switch_node_background_color = white
export const switch_background_color = white
export const switch_on_background_color = primary
export const switch_transition_duration = animation_duration_base
export const switch_disabled_opacity = active_opacity
export const switch_border_width = border_width_base
export const switch_border_style: ViewStyle['borderStyle'] = 'solid'
export const switch_border_color: string = 'rgba(0, 0, 0, 0.1)'

// Tag
export const tag_padding_horizontal = padding_base
export const tag_text_color = white
export const tag_font_size = font_size_subtitle
export const tag_border_radius: number = 2
// export const tag_line_height: number = 16
export const tag_small_padding_vertical: number = 0
export const tag_small_padding_horizontal: number = 0
export const tag_medium_padding_vertical: number = 2
export const tag_medium_padding_horizontal: number = 6
export const tag_large_padding_vertical = padding_base
export const tag_large_padding_horizontal = padding_xs
export const tag_large_border_radius = border_radius_md
export const tag_large_font_size = font_size_h5
export const tag_round_border_radius = border_radius_max
export const tag_primary_color = primary
export const tag_success_color = success
export const tag_warning_color = warning
export const tag_error_color = error
export const tag_default_color = text_color_2
export const tag_ghost_bg_color: string = 'transparent'
// export const tag_ghost_background_color = white

// TextInput
export const text_input_selection_color = primary
export const text_input_placeholder_text_color = text_color_4
export const text_input_color = text_color_1
export const text_input_large_font_size = font_size_h4
export const text_input_middle_font_size = font_size_h5
export const text_input_small_font_size = font_size_h5
export const text_input_padding_horizontal = padding_xs
// export const text_input_padding_vertical = padding_xs
export const text_input_large_min_height: number = 40
export const text_input_middle_min_height: number = 32
export const text_input_small_min_height: number = 24
export const text_input_clearable_size: number = 16
export const text_input_clearable_background_color = text_color_4
export const text_input_clearable_color: string = '#fff'
export const text_input_light_accessory_background_color: string = '#f7f7f7'
export const text_input_dark_accessory_background_color: string = '#575757'
export const text_input_dark_accessory_padding_horizontal: number = padding_sm
export const text_input_accessory_font_size = font_size_h4
export const text_input_accessory_height: number = 44
export const text_input_accessory_text_color = primary

// Result
export const result_success_color = success
export const result_error_color = error
export const result_info_color = primary
export const result_warning_color = warning
export const result_icon_size: number = 72
export const result_title_font_size = font_size_h3
export const result_title_color = text_color_1
export const result_subtitle_font_size = font_size_text
export const result_subtitle_color = text_color_2

// Toast
export const toast_max_width: string = '70%'
export const toast_font_size = font_size_text
export const toast_text_color = white
export const toast_loading_icon_color = white
export const toast_line_height = line_height_md
export const toast_border_radius = border_radius_lg
export const toast_text_border_radius = border_radius_md
export const toast_background_color: string = 'rgba(0,0,0,0.7)'
export const toast_icon_size: number = 36
export const toast_text_min_width: number = 96
export const toast_text_padding_vertical = padding_xs
export const toast_text_padding_horizontal = padding_sm
export const toast_default_padding_vertical = padding_md
export const toast_default_padding_horizontal = padding_md
export const toast_default_width: number = 88 + padding_md * 2 // box-sizing: content-box 但是 RN 无法设置，计算了一下
export const toast_default_min_height: number = 88 + padding_md * 2
export const toast_position_top_distance: string = '20%'
export const toast_position_bottom_distance: string = '20%'
