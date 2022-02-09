/* eslint-disable @typescript-eslint/no-inferrable-types */
import type { TextStyle } from 'react-native'
export * from './tokens'
import * as TOKENS from './tokens'

export const underlay_color: string = 'transparent'
// export const underlay_color_ddd: string = TOKENS.gray_1

// 分割线颜色
export const divider_color_dark: string = TOKENS.gray_4
export const divider_color_light: string = TOKENS.gray_2

// Animation
export const animation_duration_base: number = 300
export const animation_duration_fast: number = 200

// Border
export const border_color = TOKENS.gray_4

// 似乎需要调用的时候传入比较合适
export const page_header_height: number = 44

// ActionSheet
export const action_sheet_header_height: number = 48
export const action_sheet_header_font_size = TOKENS.font_size_7
export const action_sheet_description_color = TOKENS.gray_7
export const action_sheet_description_font_size = TOKENS.font_size_3
export const action_sheet_description_line_height = TOKENS.line_height_1
export const action_sheet_item_background = TOKENS.white
export const action_sheet_item_padding_horizontal = TOKENS.space_4
export const action_sheet_item_underlay_color = TOKENS.gray_1
export const action_sheet_item_font_size = TOKENS.font_size_5
export const action_sheet_item_disabled_text_color = TOKENS.gray_6
export const action_sheet_subname_color = TOKENS.gray_8
export const action_sheet_subname_font_size = TOKENS.font_size_3
export const action_sheet_subname_line_height = TOKENS.line_height_1
export const action_sheet_subname_margin_top = TOKENS.space_2
export const action_sheet_cancel_text_color = TOKENS.gray_7
export const action_sheet_cancel_padding_top = TOKENS.space_2
export const action_sheet_cancel_padding_color = TOKENS.gray_3
export const action_sheet_loading_icon_size: number = 22

// Badge
export const badge_size: number = 16
export const badge_color = TOKENS.white
export const badge_padding_vertical: number = 0
export const badge_padding_horizontal: number = 3
export const badge_font_size = TOKENS.font_size_1
export const badge_font_weight: TextStyle['fontWeight'] = 'bold'
export const badge_background_color = TOKENS.red_6
export const badge_dot_size: number = 8
export const badge_status_primary = TOKENS.brand_6
export const badge_status_success = TOKENS.green_6
export const badge_status_warning = TOKENS.yellow_6
export const badge_status_error = TOKENS.red_6

// BottomBar
export const bottom_bar_height: number = 50
export const bottom_bar_background_color = TOKENS.white
export const bottom_bar_border_top_color = border_color

// Button
export const button_xl_height: number = 52
export const button_xl_font_size: number = 18
export const button_xl_loading_size: number = 20
export const button_l_height: number = 44
export const button_l_font_size: number = 16
export const button_l_loading_size: number = 28
export const button_m_height: number = 40
export const button_m_font_size: number = 15
export const button_m_loading_size: number = 16
export const button_s_height: number = 32
export const button_s_font_size: number = 14
export const button_s_loading_size: number = 16
export const button_xs_height: number = 24
export const button_xs_font_size: number = 14
export const button_xs_loading_size: number = 16
export const button_xs_padding_horizontal = TOKENS.space_1
export const button_padding_horizontal = TOKENS.space_2
export const button_border_width: number = 1
export const button_border_color = TOKENS.gray_5
export const button_border_radius = TOKENS.border_radius_s
export const button_active_opacity = TOKENS.opacity_60
export const button_disabled_opacity = TOKENS.opacity_60
export const button_loading_opacity = TOKENS.opacity_60
export const button_primary_color = TOKENS.brand_6
export const button_danger_color = TOKENS.red_6
export const button_ghost_background_color: string = 'transparent'
export const button_hazy_lightness: number = 95
export const button_icon_gap = TOKENS.space_1

// ButtonBar
export const button_bar_padding_horizontal = TOKENS.space_3
export const button_bar_button_space: number = 8

// Card
export const card_background_color: string = TOKENS.white
export const card_padding_horizontal = TOKENS.space_3
export const card_border_radius = TOKENS.border_radius_m
export const card_header_gap = TOKENS.space_2
export const card_m_header_height: number = 50
export const card_m_header_text_font_size = TOKENS.font_size_7
export const card_m_header_text_line_height = TOKENS.line_height_2
export const card_s_header_height: number = 40
export const card_s_header_text_font_size = TOKENS.font_size_5
export const card_s_header_text_line_height = TOKENS.line_height_1
export const card_header_bottom_border_color = TOKENS.gray_2
export const card_header_text_color = TOKENS.gray_8
export const card_footer_top_border_color = TOKENS.gray_2
export const card_footer_text_font_size = TOKENS.font_size_3
export const card_footer_text_color = TOKENS.gray_7
export const card_footer_text_line_height: number = 20
export const card_footer_padding_vertical = TOKENS.space_2

// Cell
export const cell_group_title_padding_horizontal = TOKENS.space_3
export const cell_group_title_padding_top = TOKENS.space_2
export const cell_group_title_padding_bottom = TOKENS.space_2
export const cell_group_title_color = TOKENS.gray_8
export const cell_group_title_font_size = TOKENS.font_size_5
export const cell_group_title_line_height: number = 28
export const cell_icon_size = TOKENS.font_size_5
export const cell_icon_color = TOKENS.gray_6
export const cell_active_color = TOKENS.gray_1
export const cell_font_size = TOKENS.font_size_5
export const cell_background_color = TOKENS.white
export const cell_padding_vertical = TOKENS.space_3
export const cell_padding_horizontal = TOKENS.space_3
export const cell_mini_height: number = 50
export const cell_title_text_color = TOKENS.gray_8
export const cell_title_height: number = 32
export const cell_title_line_height = TOKENS.line_height_1
export const cell_title_line_margin_right = TOKENS.space_2
export const cell_value_text_color = TOKENS.gray_7
export const cell_required_color = TOKENS.red_6
export const cell_required_width = TOKENS.space_3
export const cell_icon_link_margin_left = TOKENS.space_2

// Checkbox
export const checkbox_icon_size: number = 20
export const checkbox_icon_color = TOKENS.gray_6
export const checkbox_icon_disabled_color = TOKENS.gray_7
export const checkbox_checked_icon_color = TOKENS.brand_6
export const checkbox_checked_icon_disabled_color = TOKENS.gray_7
export const checkbox_label_color = TOKENS.gray_8
export const checkbox_label_margin = TOKENS.space_2
export const checkbox_disabled_label_color = TOKENS.gray_6

// Collapse
export const collapse_transition_duration = animation_duration_base
export const collapse_padding_horizontal = TOKENS.space_4
export const collapse_background_color = TOKENS.white
export const collapse_title_font_size = TOKENS.font_size_5
export const collapse_title_line_height = 22
export const collapse_title_padding_vertical: number = 14
export const collapse_title_padding_horizontal = TOKENS.space_4
export const collapse_title_text_color = TOKENS.gray_8
export const collapse_title_icon_color = TOKENS.gray_6
export const collapse_title_icon_size = TOKENS.font_size_5
export const collapse_title_border_color = divider_color_light

// Dialog
export const dialog_width: number = 300
export const dialog_transition = animation_duration_base
export const dialog_border_radius = TOKENS.border_radius_xl
export const dialog_background_color = TOKENS.white
export const dialog_header_font_weight: TextStyle['fontWeight'] = 'bold'
export const dialog_header_line_height = TOKENS.line_height_2
export const dialog_header_margin_top: number = 30
export const dialog_header_font_size = TOKENS.font_size_7
export const dialog_message_margin_top: number = 12
export const dialog_message_padding_horizontal = TOKENS.space_6
export const dialog_message_font_size = TOKENS.font_size_5
export const dialog_message_line_height = TOKENS.line_height_1
export const dialog_message_text_color = TOKENS.gray_7
export const dialog_footer_margin_top: number = 32
export const dialog_confirm_button_text_color = TOKENS.brand_6
export const dialog_cancel_button_text_color = TOKENS.gray_7
export const dialog_input_gap = TOKENS.space_4

// Divider
export const divider_margin_horizontal = TOKENS.space_4
export const divider_text_color = TOKENS.gray_8
export const divider_font_size = TOKENS.font_size_4
export const divider_line_height = TOKENS.line_height_2
export const divider_content_left_width: string = '10%'
export const divider_content_right_width: string = '10%'

// DropdownMenu
export const dropdown_menu_height: number = 48
export const dropdown_menu_background_color = TOKENS.white
export const dropdown_menu_title_font_size = TOKENS.font_size_4
export const dropdown_menu_title_text_color = TOKENS.gray_8
export const dropdown_menu_title_active_text_color = TOKENS.brand_6
export const dropdown_menu_title_disabled_text_color = TOKENS.gray_6
export const dropdown_menu_title_padding_horizontal = TOKENS.space_1
export const dropdown_menu_title_line_height = TOKENS.line_height_1
export const dropdown_menu_title_icon_size: number = 12
export const dropdown_menu_option_active_color = TOKENS.brand_6

// Empty
export const empty_image_width: number = 130
export const empty_image_height: number = 115
export const empty_icon_margin_bottom = TOKENS.space_2
export const empty_text_color = TOKENS.gray_6
export const empty_text_font_size = TOKENS.font_size_3
export const empty_text_line_height = TOKENS.line_height_1

// Icon
export const icon_color = TOKENS.gray_7
export const icon_disabled_color = TOKENS.gray_5

// Loading
export const loading_gap = TOKENS.space_2
export const loading_text_color = TOKENS.gray_6
export const loading_text_font_size = TOKENS.font_size_4
export const loading_icon_color = TOKENS.gray_6
export const loading_icon_size: number = 24
export const loading_icon_animation_duration: number = 800

// NavBar
export const nav_bar_arrow_size: number = 20
export const nav_bar_height: number = 44
export const nav_bar_gap = TOKENS.space_3
export const nav_bar_background_color = TOKENS.white
export const nav_bar_title_text_color = TOKENS.gray_8
export const nav_bar_title_font_size = TOKENS.font_size_5
export const nav_bar_icon_color = TOKENS.gray_8

// NoticeBar
export const notice_bar_padding_vertical = TOKENS.space_2
export const notice_bar_padding_horizontal = TOKENS.space_4
export const notice_bar_text_line_height = TOKENS.line_height_1
export const notice_bar_text_font_size = TOKENS.font_size_3
export const notice_bar_icon_size = TOKENS.font_size_3
export const notice_bar_icon_margin_horizontal = TOKENS.space_2
export const notice_bar_primary_background_color: string = '#E6F0FF'
export const notice_bar_primary_text_color = TOKENS.brand_6
export const notice_bar_success_background_color: string = '#EBFFF2'
export const notice_bar_success_text_color: string = TOKENS.green_6
export const notice_bar_warning_background_color: string = '#FEEDE5'
export const notice_bar_warning_text_color = TOKENS.yellow_6
export const notice_bar_error_background_color: string = '#FFEBEC'
export const notice_bar_error_text_color = TOKENS.red_6

// Notify
export const notify_text_color = TOKENS.white
export const notify_padding_vertical = TOKENS.space_2
export const notify_padding_horizontal = TOKENS.space_4
export const notify_font_size = TOKENS.font_size_4
export const notify_line_height = TOKENS.line_height_1
export const notify_primary_background_color = TOKENS.brand_6
export const notify_success_background_color = TOKENS.green_6
export const notify_error_background_color = TOKENS.red_6
export const notify_warning_background_color = TOKENS.yellow_6

// Overlay
export const overlay_z_index: number = 10
export const overlay_background_color: string = 'rgba(0, 0, 0, 0.7)'

// Picker
export const picker_bottom_gap = TOKENS.space_4
export const picker_header_text_line_height: number = 44
export const picker_header_action_font_size = TOKENS.font_size_5
export const picker_header_cancel_text_color = TOKENS.gray_7
export const picker_header_confirm_text_color = TOKENS.brand_6
export const picker_header_reset_text_color = TOKENS.gray_7
export const picker_date_range_padding_vertical = TOKENS.space_3
export const picker_date_range_text_font_size = TOKENS.font_size_3
export const picker_date_range_text_color = TOKENS.gray_7
export const picker_date_range_text_line_height: number = 20
export const picker_date_range_day_margin_top = TOKENS.space_1
export const picker_date_range_day_font_size = TOKENS.font_size_5
export const picker_date_range_day_color = TOKENS.gray_5
export const picker_date_range_day_color_active = TOKENS.brand_6
export const picker_date_range_day_line_height: number = 22

// PickerView
export const picker_view_background_color = TOKENS.white
export const picker_view_column_mask_border_color = border_color
export const picker_view_column_mask_background_color: string =
  'rgba(255,255,255,0.8)'
export const picker_view_column_text_color = TOKENS.gray_8
export const picker_view_column_text_disabled_color: string = TOKENS.gray_6
export const picker_view_column_text_font_size = TOKENS.font_size_5

// Popup
export const popup_background_color = TOKENS.white
export const popup_round_border_radius = TOKENS.border_radius_xl
export const popup_close_icon_size: number = 24
export const popup_close_icon_color = TOKENS.gray_7
export const popup_close_icon_margin_left = TOKENS.space_2

// Progress
export const progress_height: number = 4
export const progress_color = TOKENS.brand_6
export const progress_background_color = TOKENS.gray_3
export const progress_pivot_padding_horizontal = TOKENS.space_1
export const progress_pivot_text_color = TOKENS.white
export const progress_pivot_font_size = TOKENS.font_size_2
export const progress_pivot_line_height_scale: number = 1.6
export const progress_pivot_background_color = TOKENS.brand_6
export const progress_page_background_color = TOKENS.white

// Search
export const search_background_color = TOKENS.white
export const search_padding_horizontal = TOKENS.space_3
export const search_padding_vertical = TOKENS.space_1
export const search_gap = TOKENS.space_2
export const search_back_icon_color = TOKENS.gray_8
export const search_text_input_background_color = TOKENS.gray_3

// Selector
export const selector_min_height: number = 270
export const selector_option_text_line_height: number = 50
export const selector_option_text_font_size = TOKENS.font_size_4
export const selector_option_text_color = TOKENS.gray_8
export const selector_icon_selected_color = TOKENS.brand_6
export const selector_body_padding_horizontal = TOKENS.space_3

// Sidebar
export const sidebar_background_color = TOKENS.white
export const sidebar_item_background_color = TOKENS.gray_3
export const sidebar_item_underlay_color = TOKENS.gray_4
export const sidebar_item_padding_vertical = TOKENS.space_3
export const sidebar_item_padding_horizontal = TOKENS.space_3
export const sidebar_item_border_radius = TOKENS.border_radius_m
export const sidebar_item_bar_width: number = 3
export const sidebar_item_bar_height: number = 26
export const sidebar_item_text_line_height: number = 20
export const sidebar_item_text_font_size = TOKENS.font_size_3
export const sidebar_item_bar_background_color = TOKENS.brand_6
export const sidebar_item_active_text_color = TOKENS.gray_8
export const sidebar_item_inactive_text_color = TOKENS.gray_7

// Skeleton
export const skeleton_color: string = TOKENS.gray_3
export const skeleton_color_active = TOKENS.gray_1
export const skeleton_avatar_border_radius = TOKENS.border_radius_s

// Space
export const space_gap_vertical = TOKENS.space_2
export const space_gap_horizontal = TOKENS.space_2

// Steps
export const steps_background_color = TOKENS.brand_6
export const steps_padding_vertical = TOKENS.space_4
export const steps_padding_horizontal = TOKENS.space_6
export const steps_icon_dot_size: number = 10
export const steps_icon_dot_active_size: number = 16
export const steps_icon_success_active_size: number = 16
export const steps_title_size = TOKENS.font_size_4
export const steps_title_color = TOKENS.white

// Switch
export const switch_size: number = 30
export const switch_width_ratio: number = 2 // 原变量中使用了 em，这里改成对应的比例
export const switch_height_ratio: number = 1 // 原变量中使用了 em，这里改成对应的比例
export const switch_node_size_ratio: number = 1 // 原变量中使用了 em，这里改成对应的比例
export const switch_node_background_color = TOKENS.white
export const switch_background_color = TOKENS.gray_3
export const switch_on_background_color = TOKENS.brand_6
export const switch_transition_duration = animation_duration_base
export const switch_disabled_opacity = TOKENS.opacity_60

// TabBar
export const tab_bar_text_font_size = TOKENS.font_size_1
export const tab_bar_text_margin_top = TOKENS.space_1
export const tab_bar_text_color = TOKENS.gray_6
export const tab_bar_icon_color = TOKENS.gray_6
export const tab_bar_active_text_color = TOKENS.brand_6
export const tab_bar_active_icon_color = TOKENS.brand_6

// Tag
export const tag_l_close_icon = TOKENS.font_size_5
export const tag_l_height: number = 24
export const tag_l_font_size = TOKENS.font_size_3
export const tag_l_padding_horizontal = TOKENS.space_2
export const tag_m_close_icon = TOKENS.font_size_3
export const tag_m_height: number = 20
export const tag_m_font_size = TOKENS.font_size_2
export const tag_m_padding_horizontal: number = 4
export const tag_s_close_icon = TOKENS.font_size_2
export const tag_s_height: number = 16
export const tag_s_font_size = TOKENS.font_size_2
export const tag_s_padding_horizontal: number = 2
export const tag_padding_horizontal = TOKENS.space_1
export const tag_text_color = TOKENS.white
export const tag_border_radius = TOKENS.border_radius_xs
export const tag_primary_color = TOKENS.brand_6
export const tag_ghost_background_color: string = 'transparent'
export const tag_hazy_lightness: number = 95

// TextInput
export const text_input_l_font_size = TOKENS.font_size_5
export const text_input_l_min_height: number = 40
export const text_input_m_font_size = TOKENS.font_size_4
export const text_input_m_min_height: number = 32
export const text_input_s_font_size = TOKENS.font_size_4
export const text_input_s_min_height: number = 24
export const text_input_selection_color = TOKENS.brand_6
export const text_input_placeholder_text_color = TOKENS.gray_5
export const text_input_color = TOKENS.gray_8
export const text_input_disabled_color = TOKENS.gray_6
export const text_input_disabled_background_color: string = '#EFEFF1'
export const text_input_border_radio = TOKENS.border_radius_s
export const text_input_padding_horizontal = TOKENS.space_2
export const text_input_clearable_size: number = 16
export const text_input_clearable_background_color = TOKENS.gray_5
export const text_input_clearable_color = TOKENS.white
export const text_input_fix_text_color = TOKENS.gray_8
export const text_input_addon_text_color = TOKENS.gray_8
export const text_input_light_accessory_background_color: string = '#f7f7f7'
export const text_input_dark_accessory_background_color: string = '#575757'
export const text_input_dark_accessory_padding_horizontal = TOKENS.space_3
export const text_input_accessory_font_size = TOKENS.font_size_5
export const text_input_accessory_height: number = 44
export const text_input_accessory_text_color = TOKENS.brand_6
export const text_input_word_limit_text_font_size = TOKENS.font_size_3
export const text_input_word_limit_text_color = TOKENS.gray_7

// Result
export const result_success_color = TOKENS.green_6
export const result_error_color = TOKENS.red_6
export const result_info_color = TOKENS.brand_6
export const result_warning_color = TOKENS.yellow_6
export const result_icon_size: number = 72
export const result_title_font_size = TOKENS.font_size_7
export const result_title_color = TOKENS.gray_8
export const result_subtitle_font_size = TOKENS.font_size_3
export const result_subtitle_color = TOKENS.gray_7

// Toast
export const toast_max_width: string = '70%'
export const toast_background_color: string = `rgba(0,0,0,${TOKENS.opacity_70})`
export const toast_border_radius = TOKENS.border_radius_xl
export const toast_text_border_radius = TOKENS.border_radius_m
export const toast_icon_color = TOKENS.white
export const toast_icon_padding = TOKENS.space_1
export const toast_icon_size: number = 36
export const toast_inner_padding_vertical = TOKENS.space_4
export const toast_inner_padding_horizontal = TOKENS.space_4
export const toast_inner_width: number = 120
export const toast_inner_min_height: number = 120
export const toast_font_size = TOKENS.font_size_3
export const toast_text_color = TOKENS.white
export const toast_line_height: number = 20
export const toast_text_min_width: number = 96
export const toast_text_padding_vertical = TOKENS.space_2
export const toast_text_padding_horizontal = TOKENS.space_3
export const toast_text_margin_top = TOKENS.space_2
export const toast_position_top_distance: string = '20%'
export const toast_position_bottom_distance: string = '20%'

// Uploader
export const uploader_image_margin_right = TOKENS.border_radius_xl
export const uploader_image_margin_bottom = TOKENS.border_radius_xl
export const uploader_image_border_radius = TOKENS.border_radius_s
export const uploader_image_delete_size: number = 16
export const uploader_image_background_color = TOKENS.gray_2
export const uploader_upload_text_color = TOKENS.gray_6
export const uploader_upload_text_font_size = TOKENS.font_size_3
export const uploader_upload_text_line_height: number = 20
export const uploader_upload_text_margin_top = TOKENS.space_1
